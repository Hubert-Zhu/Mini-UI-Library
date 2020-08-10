import React from 'react'
import PropTypes from 'prop-types';
import StyledContactList, { Contacts } from "./style"
import FilterList from 'components/FilterList';
import ContactCard from "components/ContactCard"


function ContactList({children, ...rest}) {
    return (
        <StyledContactList {...rest}>
            <FilterList options={["Sort by Name Alphabet", "Sort by Following Record"]} actionLabel="Follow New Friends">
                <Contacts>
                    {new Array(10).fill(0).map((item, index) => (
                        <ContactCard key={index}/>
                    ))}
                </Contacts>
             </FilterList>
            
        </StyledContactList>
    )
}

ContactList.propTypes = {
   children: PropTypes.any
}

export default ContactList
