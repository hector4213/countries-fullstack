import React from "react";

const Filter = ({ onChange, searchTerm }) => {
  return (
    <div>
      find countries:
      <input onChange={onChange} value={searchTerm} type="text" />
    </div>
  )
};

export default Filter;
