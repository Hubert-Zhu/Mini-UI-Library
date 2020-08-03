import React from "react";
import MessageCard from ".";
import face1 from "assets/images/face-male-1.jpg"

export default {
    title: "UI Components/MessageCard",
    component: "MessageCard"
};

export const Default = () => (
    <MessageCard
        avatarSrc={face1}
        name="Hubert"
        avatarStatus="online"
        statusText="Online"
        time="3 hours ago"
        message="Hello World"
        unreadCount={2}
    />
)

export const Active= () => (
    <MessageCard
        avatarSrc={face1}
        name="Hubert"
        avatarStatus="online"
        statusText="Online"
        time="3 hours ago"
        message="Hello World"
        unreadCount={2}
        active
    />
)

export const Replied= () => (
    <MessageCard
        avatarSrc={face1}
        name="Hubert"
        avatarStatus="online"
        statusText="Online"
        time="3 hours ago"
        message="Hello World"
        unreadCount={2}
        active
        replied
    />
)

export const RepliedInactive= () => (
    <MessageCard
        avatarSrc={face1}
        name="Hubert"
        avatarStatus="online"
        statusText="Online"
        time="3 hours ago"
        message="Hello World"
        unreadCount={2}
        replied
    />
)

