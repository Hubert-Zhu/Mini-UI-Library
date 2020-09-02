import React from "react";
import { NavBarDemo, MenuItemDemo } from ".";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import "styled-components/macro";

export default {
  title: "Page Components/NavBar",
  component: "NavBar",
};

export const Default = () => <NavBarDemo />

export const Menu = () => {
  return (
    <div
      css={`
        background-color: ${({ theme }) => theme.darkPurple};
        width: 100px;
      `}
    >
      <MenuItemDemo showBadge active icon={faCommentDots} />
    </div>
  );
};
