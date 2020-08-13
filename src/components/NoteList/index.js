import React from "react";
import PropTypes from "prop-types";
import StyledNoteList, { Notes } from "./style";
import FilterList from "components/FilterList";
import NoteCard from "components/NoteCard";
import useStaggeredList from "hooks/useStaggeredList";
import { animated } from "react-spring";

function NoteList({ children, ...rest }) {
  const trailAnimes = useStaggeredList(10);

  return (
    <StyledNoteList {...rest}>
      <FilterList
        options={["Sort by Date Added", "Sort by Data Modified"]}
        actionLabel="Add New Note"
      >
        <Notes>
          {new Array(10).fill(0).map((item, index) => (
            <animated.div key={index} style={trailAnimes[index]}>
              <NoteCard key={index} />
            </animated.div>
          ))}
        </Notes>
      </FilterList>
    </StyledNoteList>
  );
}

NoteList.propTypes = {
  children: PropTypes.any,
};

export default NoteList;
