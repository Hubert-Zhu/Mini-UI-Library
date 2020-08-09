import React, { useState } from "react";
import PropTypes from "prop-types";
import StyledEditProfile, {
  GroupTitle,
  GenderAndRegion,
  SelectGroup,
  StyledIconInput,
} from "./styled";
import Profile from "components/Profile";
import face from "assets/images/face-male-1.jpg";
import Avatar from "components/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Button from "components/Button";

import "styled-components/macro";
import InputText from "components/Input/InputText";
import Radio from "components/Radio";
import LabelContainer from "components/LabelContainer";
import Select from "components/Select";
import Option from "components/Option";
import {
  faWeibo,
  faGithub,
  faLinkdin,
} from "@fortawesome/free-brands-svg-icons";
import Icon from "components/Icon";

function EditProfile({ children, ...rest }) {
  const [showEdit, setShowEdit] = useState(false);

  if (!showEdit) {
    return (
      <Profile
        onEdit={() => setShowEdit(true)}
        showEditBtn
        ShowCloseIcon={false}
      />
    );
  }

  return (
    <StyledEditProfile {...rest}>
      <Avatar
        arc={face}
        size="160px"
        css={`
          grid-area: 1 / 1 / 2 / 2;
          justify-self: center;
          margin-buttom: 12px;
        `}
      />
      <Button
        size="52px"
        css={`
          grid-area: 1/ 2 / 2/ 2;
          z-index: 10;
          align-self: end;
          justify-self: end;
        `}
      >
        <fontAwesomeIcon icon={faCheck} onClick={() => setShowEdit(false)} />
      </Button>
      <GroupTitle>Personal Information</GroupTitle>
      <InputText label="Preferred name"></InputText>
      <GenderAndRegion>
        <Radio.Group label="Gender">
          <Radio name="gender">Male</Radio>
          <Radio name="gender">Female</Radio>
        </Radio.Group>
        <LabelContainer label="Region">
          <SelectGroup>
            <Select type="form">
              <Option type="form">Country</Option>
            </Select>
            <Select type="form">
              <Option type="form">Province</Option>
            </Select>
            <Select type="form">
              <Option type="form">City</Option>
            </Select>
          </SelectGroup>
        </LabelContainer>
      </GenderAndRegion>

      <GroupTitle>Contact Information</GroupTitle>
      <InputText label="Phone Number" />
      <InputText label="E-mail" />
      <InputText label="Personal Website" />

      <GroupTitle>Soical Medias</GroupTitle>
      <IconInput icon={faWeibo} bgColor="#F06767" />
      <IconInput icon={faGithub} bgColor="blakc" />
      <IconInput icon={faLinkdin} bgColor="#2483C0" />
    </StyledEditProfile>
  );
}

function IconInput({ icon, bgColor, ...rest }) {
  return (
    <StyledIconInput>
      <Icon.Social icon={icon} bgColor={bgColor} />
      <InputText {...rest} />
    </StyledIconInput>
  );
}

EditProfile.propTypes = {
  children: PropTypes.any,
};

export default EditProfile;
