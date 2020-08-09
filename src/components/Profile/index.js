import React from 'react'
import PropTypes from 'prop-types';
import StyledProfile, {SocialLinks} from "./style"
import "styled-components/macro"
import face from "assets/images/face-male-3.jpg"
import Avatar from "components/Avatar"
import Paragraph from "components/Paragraph"
import Icon from "components/Icon"
import { faWeibo, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"


function Profile({children, ...rest}) {
    return (
        <StyledProfile {...rest}>
            <Avatar css={`margin: 26px 0;`} src={face} size="160px" status="online" statusIconSize="25px" />
            <Paragraph size="xlarge" css={`margin-bottom: 12px`}>Hubert Zhu</Paragraph>
            <Paragraph size="medium" type="secondary" css={`margin-bottom: 18px`}>ON Waterloo</Paragraph>
            <Paragraph size="medium" css={`margin-bottom: 26px`}>Frontend Web Developer / Undergraduate Student</Paragraph>
            <SocialLinks>
                <Icon.Social icon={faWeibo} bgColor="#F06767" />
                <Icon.Social icon={faGithub} bgColor="black" href="https://github.com/Hubert-Zhu" />
                <Icon.Social icon={faLinkedin} bgColor="#2483C0" href="https://www.linkedin.com/in/hubert-zhu-23002b19b/" />
            </SocialLinks>
            
        </StyledProfile>
    )
}

Profile.propTypes = {
   children: PropTypes.any
}

export default Profile
