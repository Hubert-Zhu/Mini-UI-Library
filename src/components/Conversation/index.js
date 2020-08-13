import React from 'react'
import PropTypes from 'prop-types';
import StyledConversation, { Conversations, MyChatBubble} from "./style"
import ChatBubble from 'components/ChatBubble';
import TitleBar from 'components/TitleBar';
import VoiceMessage from 'components/VoiceMessage'
import Emoji from 'components/Emoji'
import Footer from 'components/Footer'



function Conversation({children, onVideoClicked, onAvatarClick, ...rest}) {
    return (
        <StyledConversation {...rest}>
            <TitleBar onVideoClicked={onVideoClicked} onAvatarClick={onAvatarClick}/>
            <Conversations>
                <ChatBubble time="Yesterday 14:00">Hi, Hubert. How are u?</ChatBubble>
                <MyChatBubble time="Yesterday 14:20">umm...not bad<Emoji label="smile">😄</Emoji></MyChatBubble>
                <ChatBubble time="Yesterday 14:25"> <VoiceMessage time="01:11"/></ChatBubble>
                <MyChatBubble time="Yesterday 14:26"><VoiceMessage type="mine" time="00:46"/></MyChatBubble>
            </Conversations>
            <Footer />
        </StyledConversation>
    )
}

Conversation.propTypes = {
   children: PropTypes.any
}

export default Conversation
