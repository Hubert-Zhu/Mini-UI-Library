import React from 'react'
import PropTypes from 'prop-types';
import StyledText from "./style"


function Text({children, type="primary", size="normal", blod,  ...rest}) {
    return (
        <StyledText type={type} size={size} bold={blod} {...rest}>
            {children}
        </StyledText >
    )
}

Text.propTypes = {
   children: PropTypes.any,
   type: PropTypes.oneOf(["primary","secondary","danger"]),
   size: PropTypes.oneOf([
       "xxsmall",
       "xsmall",
       "small",
       "normal",
       "medium",
       "large",
       "xlarge",
       "xxlarge"
   ]),
   bold: PropTypes.bool
}

export default Text
