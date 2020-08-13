import React from "react";
import PropTypes from "prop-types";
import StyledFileList, { Files } from "./style";
import FileCard from "components/FileCard";
import FilterList from "components/FilterList";
import useStaggeredList from "hooks/useStaggeredList";
import { animated } from "react-spring";

function FileList({ children, ...rest }) {
  const trailAnimes = useStaggeredList(10);
  return (
    <StyledFileList {...rest}>
      <FilterList options={["Sort by File Name", "Sort by Date Added"]}>
        <Files>
          {new Array(10).fill(0).map((item, index) => (
            <animated.div key={index} style={trailAnimes[index]}>
              <FileCard key={index} />
            </animated.div>
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
