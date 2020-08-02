import React from "react";
import Text from ".";

export default {
    title: "Typesetting/Text",
    component: "Text"
};

export const Default = () => <Text>Defualt</Text>

export const Secondary = () => <Text type="secondary"> Secondary Text </Text>

export const Medium = () => <Text type="medium"> medium Text </Text>

export const LargeAndBold = () => (
    <Text size="large" bold>
        large text, bold
    </Text>
)
