import styled from "styled-components"
import CaretDown from "assets/icon/caret_down.svg"

const StyleSelect = styled.select`
    appearance: none;
    background-image: url(${CaretDown});
    background-repeat: no-repeat;
    background-position: rightç center;
    background-color: transparent;
    border: none;
    padding-right: 14px;
    font-size: ${({ theme }) => theme.normal};
    color: ${({ theme }) => theme.grayDark}

    ::-ms-expand{
        display: none;
    }
`;

export default StyleSelect
