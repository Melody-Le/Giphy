import React, { useEffect, useState } from "react";

const Form = (props) => {
  const [giphy, setGiphy] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const submitForm = (evnt) => {
    evnt.preventDefault();
    props.onSubmit(searchTerm);
    evnt.target.value = "yes";
  };
  return (
    <div>
      <form onSubmit={submitForm}>
        <label>
          SEARCH
          <input
            type="text"
            value={searchTerm}
            onChange={(evnt) => setSearchTerm(evnt.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
