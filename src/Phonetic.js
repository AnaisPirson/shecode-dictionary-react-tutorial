import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  let audio = new Audio(props.phonetic.audio);

  const start = () => {
    audio.play();
  };
  return (
    <div className="Phonetic">
      {/* Note: there are three options here, listen link, audio player or button */}
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen
      </a>{" "}
      <span className="text">{props.phonetic.text}</span>
      <br />
      <audio controls src={props.phonetic.audio}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
      <br />
      <button className="btn btn-primary" onClick={start}>
        Play
      </button>
      <br />
    </div>
  );
}
