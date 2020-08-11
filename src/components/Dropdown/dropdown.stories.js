import React, { useState } from "react";
import Dropdown from ".";
import Paragraph from "components/Paragraph"
import Seperator from "components/Seperator"
import { DropdownItem } from "./style"

import { ReactComponent as Options } from "assets/icon/options.svg"
import Icon from "components/Icon"

export default {
    title: "UI Components/Dropdown",
    component: "Dropdown"
};

const dropdownContent = (
    <>
        <DropdownItem>
            <Paragraph>Personal Information</Paragraph>
        </DropdownItem>
        <DropdownItem>
            <Paragraph>Close Meeting</Paragraph>
        </DropdownItem>
        <DropdownItem>
            <Paragraph type="danger">Block Message</Paragraph>
        </DropdownItem>
    </>
)

export const Default = () => (
    <div style={{display:"flex", justifyContent:"space-between", width:"50%"}}>
        <Paragraph>Click Right Button</Paragraph>
        <Dropdown content={dropdownContent}>
            <Icon opacity={0.3} icon={Options} />
        </Dropdown>
    </div>
)

export const Left = () => (
    <div>
        <Paragraph>Click Below Button</Paragraph>
        <Dropdown align="left" content={dropdownContent}>
            <Icon opacity={0.3} icon={Options} />
        </Dropdown>
    </div>
)