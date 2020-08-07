import React from "react";
import ChatBubble from ".";
import VoiceMessage from "components/VoiceMessage"

export default {
    title: "UI Components/ChatBubble",
    component: "ChatBubble",
    decorators: [(storyFn) => <div styel={{ padding: "24px"}}>{storyFn()}</div>],
};

export const FromOthers = () => <ChatBubble time={"Yesterday 14:00pm"}>This is a Defualt Message</ChatBubble>

export const Mine = () => <ChatBubble type="mine" time="Yesterday 14:00pm">This message was sent by myself</ChatBubble>

export const VoiceMessageType = () => <ChatBubble time="Yesterday 18:30px"><VoiceMessage time="1:24" /></ChatBubble>

export const VoiceMessageTypeMine = () => <ChatBubble type="mine" time="Yesterday 18:30pm"><VoiceMessage type="mine" time="2:10"/></ChatBubble>