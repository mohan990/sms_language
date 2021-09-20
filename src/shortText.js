import { useState } from "react";
import "./styles.css";
var shortText = {
  "?4U": "I have a question for you",
  "<3": "Love",
  LOL: "laughing out loud 😂😂😂😂",
  ROFL: "rolling on the floor laughing",
  LAMO: "laughing my ASS off 😂",
  AKA: "As Known As ",
  ASAP: "As Soon As Possible",
  BTW: "By the way",
  OTW: "on the way",
  DIY: "do it yourself",
  BFF: "boy friend forever",
  GFF: "girl friend forever",
  TQ: "Thank you",
  GN: "Good night",
  TC: "Take care",
  ATB: "All the best",
  G2G: "Got to Go",
  TYSM: "Thank you so much"
};
export default function App() {
  var [abbrevation, setAbbrevation] = useState(" ");
  function changeEvent(event) {
    var userInput = event.target.value;
    var UpperUserInput = userInput.toUpperCase();
    var abbrevation = shortText[UpperUserInput];

    if (UpperUserInput === "") {
      setAbbrevation(" ");
    } else if (abbrevation === undefined) {
      setAbbrevation(
        "we don't have this on our database and will be updated soon"
      );
    } else {
      setAbbrevation(abbrevation);
    }
  }
  return (
    <div className="App">
      <input
        onChange={changeEvent}
        placeholder="//type your Short text here..."
      ></input>
      <div className="output">
        Abbrevation: <span style={{ color: "#163C5D" }}>{abbrevation}</span>
      </div>
    </div>
  );
}
