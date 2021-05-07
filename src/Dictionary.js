import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);
  let language = "en_US";
  let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/${language}/${keyword}`;
  let [loaded, setLoaded] = useState(false);
  let pexelsApiKey = "563492ad6f91700001000001d6f5f9486e8f4ee8994aa7598c9c4efc";
  let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
  let headers = { Authorization: `Bearer ${pexelsApiKey}` };

  function search() {
    axios.get(apiURL).then(handleResponse);
    axios
      .get(pexelsApiUrl, {
        headers: headers,
      })
      .then(handlePixelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    // console.log(apiURL);
  }
  function handleKeywordChange(response) {
    setKeyword(response.target.value);
  }

  function handleResponse(response) {
    // console.log(response.data);
    setResults(response.data[0]);
  }

  function handlePixelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus={true}
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">
            suggested words: sunset, wine, yoga, plants...
          </div>
        </section>

        <Results results={results} />
        <Photos photos={photos} keyword={keyword} />
      </div>
    );
  } else {
    load();
    return "nothing";
  }
}

// api documentation: https://dictionaryapi.dev/
