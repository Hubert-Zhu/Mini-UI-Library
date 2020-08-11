import React from "react";
import PropTypes from "prop-types";
import StyledMessageList, { ChatList } from "./style";
import MessageCard from "components/MessageCard";
import FilterList from "components/FilterList";

import face1 from "assets/images/face-male-1.jpg";

function MessageList({ children, ...rest }) {
  return (
    <StyledMessageList {...rest}>
      <FilterList
        options={["Latest Message", "Online Friends"]}
        actionLabel="New Chat"
      >
        <ChatList>
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <MessageCard
              key={index}
              active={index === 3}
              replied={index % 3 === 0}
              avatarSrc={face1}
              name="Hubert"
              avatarStatus="online"
              statusText="Online"
              time="6 hrs ago"
              message="Hello World"
              unreadCount={2}
            />
          ))}
        </ChatList>
      </FilterList>
      <ChatList />
    </StyledMessageList>
  );
}

MessageList.propTypes = {
  children: PropTypes.any,
};

export default MessageList;
