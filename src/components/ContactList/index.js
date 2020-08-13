import React from "react";
import PropTypes from "prop-types";
import StyledContactList, { Contacts } from "./style";
import FilterList from "components/FilterList";
import ContactCard from "components/ContactCard";
import useStaggeredList from "hooks/useStaggeredList";
import { animated } from "react-spring";

function ContactList({ children, ...rest }) {
  const trailAnimes = useStaggeredList(10);
  return (
    <StyledContactList {...rest}>
      <FilterList
        options={["Sort by Name Alphabet", "Sort by Following Record"]}
        actionLabel="Follow New Friends"
      >
        <Contacts>
          {new Array(10).fill(0).map((item, index) => (
            <animated.div key={index} style={trailAnimes[index]}>
              <ContactCard key={index} />
            </animated.div>
          ))}
        </Contacts>
      </FilterList>
    </StyledContactList>
  );
}

ContactList.propTypes = {
  children: PropTypes.any,
};

export default ContactList;
