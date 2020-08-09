import React from "react";
import Radio from ".";


export default {
    title: "UI Components/Input/Radio",
    component: "Radio"
};

export const Default = () => <Radio>Options</Radio>

export const RadioGroup = () => (
    <Radio.Group label="Please Choose">
        <Radio name="Radio">Radio 1</Radio>
        <Radio name="Radio">Radio 2</Radio>
        <Radio name="Radio">Radio 3</Radio>
        <Radio name="Radio">Radio 4</Radio>
    </Radio.Group>
)