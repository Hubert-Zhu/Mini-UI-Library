import React from "react";
import Icon from ".";
import { ReactComponent as SmileIcon } from "assets/icon/smile.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "UI Components/Icon",
  component: "Icon",
};

export const Default = () => <Icon icon={SmileIcon} />;

export const CustomColor = () => {
  return <Icon icon={SmileIcon} color="#cccccc" />;
};

export const CustomSize = () => {
  return <Icon icon={SmileIcon} width={48} height={48} color="#cccccc" />;
};

export const FontAwesome = () => {
  return <FontAwesomeIcon icon={faCommentDots}> /</FontAwesomeIcon>;
};


export const FontAwesomeColor = () => {
    return <FontAwesomeIcon icon={faCommentDots} style={{color:"#cccccc"}}> /</FontAwesomeIcon>;
  };




export const FontAwesomeSizes = () => {
    return (
    <div>
        <FontAwesomeIcon icon={faCommentDots} style={{fontSize:"24px"}} /> 
        <FontAwesomeIcon icon={faCommentDots} style={{fontSize:"36px"}} />
        <FontAwesomeIcon icon={faCommentDots} style={{fontSize:"48px"}} />
    </div>)
  };