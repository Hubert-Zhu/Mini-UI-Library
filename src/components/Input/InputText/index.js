import React from 'react'
import PropTypes from 'prop-types';
import StyledInputText, { InputUnderline }from "./style"


function InputText({ label, placeholder="Please Enter Here"...rest}) {
    const input = <InputUnderline type="text" placeholder={placeholder} />

    return ( 
        <StyledInputText {...rest}>
            {label ? <LabelContainer label={label}>{input}</LabelContainer> : input}
        </StyledInputText>
    )
}

InputText.propTypes = {
   children: PropTypes.string,
   placeholder: PropTypes.string.
}

export default InputText
