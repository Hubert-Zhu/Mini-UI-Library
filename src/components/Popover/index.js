import React, { useState } from "react";
import PropTypes from "prop-types";
import StyledPopover, { Content, Triangle, Target } from "./style";

function Popover({ children, content, offset = {}, onVisible, onHide, ...rest }) {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    if (visible) {
      setVisible(false);
      onHide && onHide();
    } else {
      setVisible(true);
      onVisible && onVisible();
    }
  };

  return (
    <StyledPopover onClick={handleClick} {...rest}>
      <Content offset={offset} visible={visible}>{content}</Content>
      <Triangle offset={offset} visible={visible} />
      <Target>{children}</Target>
    </StyledPopover>
  );
}

Popover.propTypes = {
  children: PropTypes.any,
  content: PropTypes,any,
  offset: PropTypes.shape({ x: PropTypes.string, y:PropTypes.string})
  onVisible: PropTypes.func,
  onHide: PropTypes.func,
};

export default Popover;
