import styled from "styled-components"

const Time = styled(Paragraph).attr({type:"secondary", size: "small"})`
    margin: 6px;
    margin-left: 24px;
    word-spacing: 1rem;
`

const BubbleTip = styled(Icon)`
    position: 'absolute';
    bottom: -15%;
    left: 0;
    z-index: 5;
`

const Bubble = styled.div`
    padding: 15px 22px;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
    border-radius: 100px;
    position: relative;
    z-index: 10;
`

const MessageText = styled(Text)`

`

const StyledChatBubble = styled.div`
    display: flex;
    flex-direction: column;
`;

export default StyledChatBubble