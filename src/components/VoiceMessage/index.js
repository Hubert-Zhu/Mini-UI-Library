import React from 'react'
import PropTypes from 'prop-types';
import StyledVoiceMessage from "./style"

import { ReactComponent as Play } from "assets/icon/play.svg"
import { ReactComponent as Wave } from "assert/icon/wave"
import { useTheme } from "styled-components"
import Button


function VoiceMessage({children, ...rest}) {
    return (
        <StyledVoiceMessage {...rest}>
            {children}
        </StyledVoiceMessage>
    )
}

VoiceMessage.propTypes = {
   children: PropTypes.any
}

export default VoiceMessage
