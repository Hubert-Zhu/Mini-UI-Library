import React from "react";
import Settings, {SettingsItem}  from ".";

export default {
    title: "Page Components/Setting",
    component: "Setting"
};

export const Default = () => <Settings>Default</Settings>

export const WithoutDescription = () => ( <SettingsItem label="This is a Setting without Description" /> )

export const WithDescription = () => ( <SettingsItem label="This is a Setting withDescription"  description="This is description" /> )

export const WithMenu= () => ( <SettingsItem label="This is a Setting with Options" type="menu" /> )