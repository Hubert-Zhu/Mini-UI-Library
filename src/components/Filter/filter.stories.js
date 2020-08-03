import React from "react";
import Filter from ".";
import Select from "components/Select"
import Option from "components/Option"
import Button from "components/Button"
import Icon from "components/Icon"

import { ReactComponent as Plus } from "assets/icon/plus.svg"

export default {
  title: "UI Components/Filter",
  component: "Filter",
};

export const Default = () => (
  <Filter>
    <Filter.Filters label="Sort List">
      <Select>
        <Option>Sort by Latest message</Option>
        <Option>Sort by online friends</Option>
      </Select>
    </Filter.Filters>

    <Filter.Action label="Start a New Chat">
      <Button>
        <Icon icon={Plus} width={12} heigth={12} />
      </Button>
    </Filter.Action>
  </Filter>
);
