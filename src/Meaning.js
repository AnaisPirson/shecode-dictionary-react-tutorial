import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  //   console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>
        <strong>{props.meaning.partOfSpeech} </strong>
      </h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">
              <strong>Definition:</strong> {definition.definition}
            </div>

            <div className="example">
              <strong>Sentence: </strong> {definition.example}
            </div>
            <em>
              <Synonyms synonyms={definition.synonyms} />
            </em>
          </div>
        );
      })}
      {/* <p>{props.meaning.definitions[0].definition}</p>
      <p>{props.meaning.definitions[0].example}</p> */}
    </div>
  );
}
