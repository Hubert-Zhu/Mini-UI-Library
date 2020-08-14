import React from "react";
import PropTypes from "prop-types";
import StyledConversation, { Conversations, MyChatBubble } from "./style";
import ChatBubble from "components/ChatBubble";
import TitleBar from "components/TitleBar";
import VoiceMessage from "components/VoiceMessage";
import Emoji from "components/Emoji";
import Footer from "components/Footer";
import { useSpring } from "react-spring";

function Conversation({ children, onVideoClicked, onAvatarClick, ...rest }) {
  const tBarAnimeProps = useSpring({
    opacity: 1,
    transform: "translate3d(0px, 0px, 0px)",
    from: { opacity: 0, transfrom: "translate3d(0px, -50px, 0px)" },
    delay: 500,
  });

  const convsAnimeProps = useSpring({
    opacity: 1,
    transform: "translate3d(0px, 0px, 0px)",
    from: { opacity: 0, transfrom: "translate3d(50px, 0px, 0px)" },
    delay: 800,
  });

  const ftAnimeProps = useSpring({
    opacity: 1,
    transform: "translate3d(0px, 0px, 0px)",
    from: { opacity: 0, transform: "translate3d(0px, 50px, 0px)" },
    delay: 950,
  });

  return (
    <StyledConversation {...rest}>
      <TitleBar
        onVideoClicked={onVideoClicked}
        onAvatarClick={onAvatarClick}
        animeProps={tBarAnimeProps}
      />
      <Conversations style={convsAnimeProps}>
        <ChatBubble time="Yesterday 14:00">Hi, Hubert. How are u?</ChatBubble>
        <MyChatBubble time="Yesterday 14:20">
          umm...not bad<Emoji label="smile">😄</Emoji>
        </MyChatBubble>
        <ChatBubble time="Yesterday 14:25">
          {" "}
          <VoiceMessage time="01:11" />
        </ChatBubble>
        <MyChatBubble time="Yesterday 14:26">
          <VoiceMessage type="mine" time="00:46" />
        </MyChatBubble>
      </Conversations>
      <Footer animeProps={ftAnimeProps} />
    </StyledConversation>
  );
}

Conversation.propTypes = {
  children: PropTypes.any,
};

export default Conversation;
