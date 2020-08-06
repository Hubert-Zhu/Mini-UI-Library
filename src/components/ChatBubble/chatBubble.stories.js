import React from "react";
import ChatBubble from ".";

export default {
    title: "UI Components/ChatBubble",
    component: "ChatBubble"
};

export const FromOthers = () => <ChatBubble time={"Yesterday 14:00pm"}>This is a Defualt Message</ChatBubble>