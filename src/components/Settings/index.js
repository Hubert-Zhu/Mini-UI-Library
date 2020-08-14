import React from "react";
import PropTypes from "prop-types";
import StyledSettings, {
    StyledSettingsItem,
    SettingItemControl,
    StyledSettingsGroup,
} from "./style";
import { ReactComponent as ArrowMenuRight } from "assets/icon/arrowMenuRight.svg";
import Switch from "components/Switch";
import Paragraph from "components/Paragraph";
import Seperator from "components/Seperator";
import Icon from "components/Icon";
import { Link } from "react-router-dom";
import { css } from "styled-components/macro";
import { useSpring, animated } from "react-spring";

function Settings({ children, ...rest }) {
    const animeProps = useSpring({
        transform: "translate3d(0px,0px,0px)",
        opacity: 1,
        from: { transform: "translate3d(100px, 0px, 0px)", opacity: 0 },
        config: {
            tension: 140,
        },
        delay: 300,
    });

    return (
        <StyledSettings {...rest}>
            <animated.div style={animeProps}>
                <SettingsGroup groupName="Privacy Setting">
                    <SettingsItem
                        label={"Need Verfication Before Following Friends"}
                    />
                    <SettingsItem
                        label={"Suggestions For You"}
                        description="According to your Friend List, system will suggest some friends to you"
                    />
                    <SettingsItem label={"Only can find me by phone number"} />
                </SettingsGroup>
                <SettingsGroup groupName="Notification Setting">
                    <SettingsItem label={"New Message Notification"} />
                    <SettingsItem label={"Voice or Video Call Notification"} />
                    <SettingsItem label={"Show Notification Detail"} />
                    <SettingsItem label={"Voice"} />
                    <Link
                        to="/settings/blocked"
                        css={`
                            text-decoration: none;
                            color: inherit;
                        `}
                    >
                        <SettingsItem
                            label={"Check Muted Friend List"}
                            type="menu"
                        />
                    </Link>
                </SettingsGroup>
            </animated.div>
        </StyledSettings>
    );
}

function SettingsGroup({ groupName, children, ...rest }) {
    return (
        <StyledSettingsGroup>
            <Paragraph size="xxlarge" style={{ paddingBottom: "24px" }}>
                {groupName}
            </Paragraph>
            {children}
        </StyledSettingsGroup>
    );
}

export function SettingsItem({
    type = "switch",
    label,
    description,
    children,
    ...rest
}) {
    return (
        <StyledSettingsItem {...rest}>
            <SettingItemControl>
                <Paragraph size="large">{label}</Paragraph>
                {type === "switch" && <Switch />}
                {type === "menu" && <Icon icon={ArrowMenuRight} />}
            </SettingItemControl>

            {description && (
                <Paragraph type="secondary" style={{ margin: "4px 0" }}>
                    {description}
                </Paragraph>
            )}

            <Seperator style={{ marginTop: "8px", marginBottom: "20px" }} />
        </StyledSettingsItem>
    );
}

Settings.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.any,
};

export default Settings;
