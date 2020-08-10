import React from 'react'
import PropTypes from 'prop-types';
import StyledContactCard from "./style"


function ContactCard({children, ...rest}) {
    return (
        <StyledContactCard {...rest}>
            <Avatar src={face} status="online" />
            <Name>Hubert</Name>
            <Intro>I am Frontend developer</Intro>
        </StyledContactCard>
    )
}

ContactCard.propTypes = {
   children: PropTypes.any
}

export default ContactCard
