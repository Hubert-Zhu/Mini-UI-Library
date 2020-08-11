import React from "react";
import PropTypes from "prop-types";
import StyledChatAPP, { Nav, Sidebar, Content, Drawer } from "./style";
import NavBar from "components/NavBar";
import MessageList from "components/MessageList";
import Conversation from "components/Conversation";
import Profile from "components/Profile";
import { Route, Switch } from "react-router-dom";
import EditProfile from "components/EditProfile";
import ContactList from "components/ContactList"
import FileList from "components/FileList"
import NoteList from "components/NoteList"

function ChatAPP({ children, ...rest }) {
  return (
    <StyledChatAPP {...rest}>
      <Nav>
        <NavBar />
      </Nav>
      <Sidebar>
        <Switch>
          <Route exact path="/">
            <MessageList />
          </Route>
          <Route exact path="/contacts">
            <ContactList />
          </Route>
          <Route exact path="/files">
            <FileList />
          </Route>
          <Route exact path="/notes">
            <NoteList />
          </Route>
          <Route path="/settings">
            <EditProfile />
          </Route>
        </Switch>
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
