import React, { useState } from "react";
import PropTypes from "prop-types";
import StyledEditProfile, {
  GroupTitle,
  GenderAndRegion,
  SelectGroup,
  StyledIconInput,
} from "./style";
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
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Icon from "components/Icon";

function IconInput({ icon, bgColor, ...rest }) {
  return (
    <div>
      <StyledIconInput>
        <Icon.Social icon={icon} bgColor={bgColor} />
        <InputText {...rest} />
      </StyledIconInput>
    </div>
  );
}

function EditProfile({ children, ...rest }) {
  const [showEdit, setShowEdit] = useState(false);

  if (!showEdit) {
    return (
      <Profile
        onEdit={() => setShowEdit(true)}
        showEditBtn
        showCloseIcon={false}
      />
    );
  }

  return (
    <StyledEditProfile {...rest}>
      <Avatar
        src={face}
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
          grid-area: 1/ 1 / 3 / 2;
          z-index: 10;
          align-self: end;
          justify-self: end;
        `}
      >
        <FontAwesomeIcon icon={faCheck} onClick={() => setShowEdit(false)} />
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
      <IconInput icon={faGithub} bgColor="black" />
      <IconInput icon={faLinkedin} bgColor="#2483C0" />
    </StyledEditProfile>
  );
}

EditProfile.propTypes = {
  children: PropTypes.any,
};

export default EditProfile;
