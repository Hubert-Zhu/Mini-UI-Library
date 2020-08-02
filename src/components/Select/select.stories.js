import React from "react";
import Select from ".";
import Option from "components/Option"

export default {
  title: "UI Components/Input/Select",
  component: "Select",
};

export const Default = () => (
  <Select>
    <Option>rank by Latest message</Option>
    <Option>rank by online friends</Option>
  </Select>
);
