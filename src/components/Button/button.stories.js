import React from "react";
import Button from ".";

import { ReactComponent as Plus } from "assets/icon/plus.svg"
import Icon from "components/Icon"

export default {
    title: "UI Components/Button",
    component: "Button"
};

export const RectButton = () => <Button shape="rect">Default</Button>

export const CircluButton = () => (
    <Button>
        <Icon icon={Plus} width={12} height={12} />
    </Button>
)