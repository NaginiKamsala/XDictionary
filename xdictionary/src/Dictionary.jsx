import React, { useState } from "react";

const initialDictionary = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." },
];

const Dictionary = () => {
  const [dictionary] = useState(initialDictionary);
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState("");

  const handleSearch = () => {
    const found = dictionary.find(
      (entry) => entry.word.toLowerCase() === searchTerm.toLowerCase()
    );
    if (found) {
      setResult(found.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <div>
      <header>
        <h1>Dictionary App</h1>
        <div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a word"
          />
          <button onClick={handleSearch}>Search</button>
          <h4>Definition :</h4>
          {result && <h3>{result}</h3>}
        </div>
      </header>
    </div>
  );
};

export default Dictionary;
