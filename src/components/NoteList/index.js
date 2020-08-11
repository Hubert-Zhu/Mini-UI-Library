import React from "react";
import PropTypes from "prop-types";
import StyledNoteList, { Notes } from "./style";
import FilterList from "components/FilterList";
import NoteCard from "components/NoteCard";

function NoteList({ children, ...rest }) {
  return (
    <StyledNoteList {...rest}>
      <FilterList
        options={["Sort by Date Added", "Sort by Data Modified"]}
        actionLabel="Add New Note"
      >
        <Notes>
          {new Array(10).fill(0).map((item, index) => (
            <NoteCard key={index} />
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
