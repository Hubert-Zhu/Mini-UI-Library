import React from 'react'
import PropTypes from 'prop-types';
import StyledPragraph from "./style"


function Pragraph({children, ellipsis, ...rest}) {
    return (
        <StyledPragraph as="p" ellipsis={ellipsis} {...rest}>
            {children}
        </StyledPragraph >
    )
}

Pragraph.propTypes = {
   children: PropTypes.any,
   ellipsis: PropTypes.bool,
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
}

export default Pragraph
