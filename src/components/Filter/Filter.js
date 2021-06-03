import React from "react";
import PropTypes from "prop-types";

import { FilterWrapper } from "./FilterStyled";

const Filter = ({ setFilter, value }) => {
  const handleChange = (e) => {
    setFilter(e.target.value);
  };
  return (
    <FilterWrapper>
      <label>
        Filter:
        <input tupe="text" value={value} onChange={handleChange}></input>
      </label>
    </FilterWrapper>
  );
};

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;
