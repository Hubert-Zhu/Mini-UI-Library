import React from "react";
import PropTypes from "prop-types";
import StyledFileList, { Files } from "./style";
import FileCard from "components/FileCard";
import FilterList from "components/FilterList"

function FileList({ children, ...rest }) {
  return (
    <StyledFileList {...rest}>
      <FilterList options={["Sort by File Name", "Sort by Date Added"]}>
        <Files>
          {new Array(10).fill(0).map((item, index) => (
            <FileCard key={index} />
          ))}
        </Files>
      </FilterList>
    </StyledFileList>
  );
}

FileList.propTypes = {
  children: PropTypes.any,
};

export default FileList;
