import React from "react";
import PropTypes from "prop-types";
import StyledMessageList, { ChatList } from "./style";

import { ReactComponent as Plus } from "assets/icon/plus.svg";

import Filter from "components/Filter";
import Input from "components/Input";
import Select from "components/Select";
import Option from "components/Option";
import Button from "components/Button";
import Icon from "components/Icon";
import MessageCard from "components/MessageCard";

import face1 from "assets/images/face-male-1.jpg";

function MessageList({ children, ...rest }) {
  return (
    <StyledMessageList {...rest}>
      <Input.Search />
      <ChatFilter />
      <ChatList />
      {[1, 2, 3, 4, 5, 6].map((_, index) => (
        <MessageCard
          key={index}
          active={index === 3}
          replied={index % 3 === 0}
          avatarSrc={face1}
          name="Hubert"
          avatarStatus="online"
          statusText="Online"
          time="6 hours ago"
          message="Hello World"
          unreadCount={2}
        />
      ))}
    </StyledMessageList>
  );
}

function ChatFilter() {
  return (
    <Filter style={{ padding: "20px 0" }}>
      <Filter.Filters label="Sort the List">
        <Select>
          <Option>Sort by Latest Message</Option>
          <Option>Sort by Online Friends</Option>
        </Select>
      </Filter.Filters>

      <Filter.Action label="Start New Chat">
        <Button>
          <Icon icon={Plus} width={12} height={12} />
        </Button>
      </Filter.Action>
    </Filter>
  );
}

MessageList.propTypes = {
  children: PropTypes.any,
};

export default MessageList;
