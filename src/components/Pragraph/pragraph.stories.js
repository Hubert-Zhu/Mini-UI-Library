import React from "react";
import Pragraph from ".";

export default {
  title: "Typesetting/Pragraph",
  component: "Pragraph",
};

export const Default = () => (
  <React.Fragment>
    <Pragraph>This is a pragraph</Pragraph>
    <Pragraph>This is a pragraph</Pragraph>
  </React.Fragment>
);

export const Ellipsis = () => (
    <Pragraph ellipsis>This is a long pragraph. This is a long pragraph. This is a long pragraph. This is a long pragraph. This is a long pragraph. This is a long pragraph. This is a long pragraph. This is a long pragraph.</Pragraph>
)
