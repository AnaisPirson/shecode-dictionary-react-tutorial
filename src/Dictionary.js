import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState();
  let language = "en_US";
  let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/${language}/${keyword}`;

  function search(event) {
    event.preventDefault();
    axios.get(apiURL).then(handleResponse);
    console.log(apiURL);
  }
  function handleKeywordChange(response) {
    setKeyword(response.target.value);
  }

  function handleResponse(response) {
    console.log(response.data);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
      </form>
    </div>
  );
}

// api documentation: https://dictionaryapi.dev/
