import React from "react";
import PropTypes from "prop-types";
import StyledTitleBar, { Actions, Title } from "./style";
import { DropdownItem } from "components/Dropdown/style"
import Dropdown from "components/Dropdown";

import face from "assets/images/face-male-3.jpg";

import { ReactComponent as Call } from "assets/icon/call.svg";
import { ReactComponent as Camera } from "assets/icon/camera.svg";
import { ReactComponent as Options } from "assets/icon/options.svg";
import Avatar from "components/Avatar";
import Paragraph from "components/Paragraph";
import Text from "components/Text";
import Icon from "components/Icon";

function TitleBar({ onAvatarClick, onVideoClicked,children, ...rest }) {
  return (
    <StyledTitleBar {...rest}>
      <Avatar onClick={onAvatarClick} status={"offline"} src={face} />
      <Title>
        <Paragraph size="large">Ray</Paragraph>
        <Paragraph type="secondary">
          <Text>Offline</Text>
          <Text> - Three hours ago</Text>
        </Paragraph>
      </Title>
      <Actions>
        <Icon opacity={0.3} icon={Call} onClick={onVideoClicked} />
        <Icon opacity={0.3} icon={Camera} />
        <Dropdown
          content={
            <>
              <DropdownItem>
                <Paragraph>Personal Information</Paragraph>
              </DropdownItem>
              <DropdownItem>
                <Paragraph>Close Meeting</Paragraph>
              </DropdownItem>
              <DropdownItem>
                <Paragraph type="danger">Block Message</Paragraph>
              </DropdownItem>
            </>
          }
        >
          <Icon opacity={0.3} icon={Options} />
        </Dropdown>
      </Actions>
    </StyledTitleBar>
  );
}

TitleBar.propTypes = {
  children: PropTypes.any,
};

export default TitleBar;
