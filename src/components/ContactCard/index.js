import React from 'react'
import PropTypes from 'prop-types';
import StyledContactCard, { Name, Intro } from "./style"
import face from "assets/images/face-male-1.jpg"
import Avatar from "components/Avatar"


function ContactCard({children, ...rest}) {
    return (
        <StyledContactCard {...rest}>
            <Avatar src={face} status="online" />
            <Name>???</Name>
            <Intro>I am Frontend developer</Intro>
        </StyledContactCard>
    )
}

ContactCard.propTypes = {
   children: PropTypes.any
}

export default ContactCard
