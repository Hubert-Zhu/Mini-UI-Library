import React from 'react'
import PropTypes from 'prop-types';
import StyledAvatar from "./style"


function Icon({children, ...rest}) {
    return (
        <StyledIcon {...rest}>
            {children}
        </StyledIcon >
    )
}

Avatar.propTypes = {
   children: PropTypes.any
}

export default Avatar
