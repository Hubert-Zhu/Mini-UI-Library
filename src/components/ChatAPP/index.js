import React from "react";
import PropTypes from "prop-types";
import StyledChatAPP, { Nav, Sidebar, Content, Drawer } from "./style";
import NavBar from "components/NavBar";
import MessageList from "components/MessageList";
import Conversation from "components/Conversation";
import Profile from "components/Profile";

function ChatAPP({ children, ...rest }) {
  return (
    <StyledChatAPP {...rest}>
      <Nav>
        <NavBar />
      </Nav>
      <Sidebar>
        <MessageList />
      </Sidebar>
      <Content>
        <Conversation />
      </Content>
      <Drawer>
        <Profile />
      </Drawer>
    </StyledChatAPP>
  );
}

ChatAPP.propTypes = {
  children: PropTypes.any,
};

export default ChatAPP;
