import React from "react";
import PropTypes from "prop-types";
import StyledProfile, {
  SocialLinks,
  ContactSection,
  AlbumSection,
  AlbumTitle,
  Album,
  Photo,
  CloseIcon,
} from "./style";
import "styled-components/macro";
import face from "assets/images/face-male-3.jpg";
import Avatar from "components/Avatar";
import Paragraph from "components/Paragraph";
import Icon from "components/Icon";
import Seperator from "components/Seperator";
import Text from "components/Text";
import {
  faWeibo,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import photo1 from "assets/images/photo1.jpg";
import photo2 from "assets/images/photo2.jpg";
import photo3 from "assets/images/photo3.jpg";

import { ReactComponent as Cross } from "assets/icon/cross.svg";
import Button from "components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons"

function Profile({
  showEditBtn,
  showCloseIcon = true,
  onEdit,
  status,
  children,
  ...rest
}) {
  return (
    <StyledProfile {...rest}>
      {showCloseIcon && <CloseIcon icon={Cross} />}
      <Avatar
        css={`
          margin: 26px 0;
          grid-area: 1 / 1 / 3 / 2;
        `}
        src={face}
        size="160px"
        status="online"
        statusIconSize="25px"
      />

      {showEditBtn && (
        <Button
          size="52px"
          onClick={onEdit}
          css={`
            grid-area: 1 / 1 / 3 / 2;
            align-self: end;
            margin-left: 100px;
            z-index: 10;
          `}
        >
          <FontAwesomeIcon
            css={`
              font-size: 24px;
            `}
            icon={faPen}
          />
        </Button>
      )}

      <Paragraph
        size="xlarge"
        css={`
          margin-bottom: 12px;
        `}
      >
        Hubert Zhu
      </Paragraph>
      <Paragraph
        size="medium"
        type="secondary"
        css={`
          margin-bottom: 18px;
        `}
      >
        ON Waterloo
      </Paragraph>
      <Paragraph
        size="medium"
        css={`
          margin-bottom: 26px;
        `}
      >
        Frontend Web Developer / Undergraduate Student
      </Paragraph>
      <SocialLinks>
        <Icon.Social icon={faWeibo} bgColor="#F06767" />
        <Icon.Social
          icon={faGithub}
          bgColor="black"
          href="https://github.com/Hubert-Zhu"
        />
        <Icon.Social
          icon={faLinkedin}
          bgColor="#2483C0"
          href="https://www.linkedin.com/in/hubert-zhu-23002b19b/"
        />
      </SocialLinks>
      <Seperator
        css={`
          margin: 30px 0;
        `}
      />
      <ContactSection>
        <Description label="Phone"> 778 888 8888</Description>
        <Description label="E-mail"> xxxxx@gmail.com</Description>
        <Description label="Github"> https://github.com/Hubert-Zhu</Description>
      </ContactSection>
      <Seperator
        css={`
          margin: 30px 0;
        `}
      />
      <AlbumSection>
        <AlbumTitle>
          <Text type="secondary">Photo Album</Text>
          <a style={{ cursor: "pointer" }}>Check Other Photo</a>
        </AlbumTitle>
        <Album>
          <Photo src={photo1} />
          <Photo src={photo2} />
          <Photo src={photo3} />
        </Album>
      </AlbumSection>
    </StyledProfile>
  );
}

function Description({ label, children }) {
  return (
    <Paragraph>
      <Text type="secondary">{label}:</Text>
      <Text>{children}</Text>
    </Paragraph>
  );
}

Profile.propTypes = {
  children: PropTypes.any,
};

export default Profile;
