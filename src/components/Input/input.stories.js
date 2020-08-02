import React from "react";
import Input from ".";
import Icon from "components/Icon";

import { ReactComponent as ClipIcon } from "assets/icon/clip.svg";
import { ReactComponent as SmileIcon } from "assets/icon/smile.svg";

export default {
  title: "UI Components/Input",
  component: "Input",
};

export const Default = () => <Input />;

export const Search = () => <Input.Search />;

export const WithAffix = () => (
  <Input
    prefix={<Icon icon={ClipIcon} color="#cccccc" />}
    suffix={<Icon icon={SmileIcon} color="#cccccc" />}
  />
);
