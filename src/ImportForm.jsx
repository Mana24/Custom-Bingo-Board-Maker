import { useState } from "preact/hooks";
import Toggle from "./Toggle.jsx";
import './styles/ImportForm.scss'

const dataShapes = {
  Simple: {
    example: '[\n\t"Farm STS",\n\t"Acquire a hat",\n\t...etc\n]',
    process: (jsonString) => {
      let squares;
      try {
        squares = JSON.parse(jsonString);
      } catch {
        throw "Invalid JSON";
      }
      if (!Array.isArray(squares)) throw "Unexpected Value. Expected an array";
      if (!squares.every((item) => typeof item === "string"))
        throw "Unexpected Value. Every item must be a string";

      return squares;
    },
  },
  Complex: {
    example: '[\n\t{"name":"Farm STS"},\n\t{"name":"Wear a hat"},\n\t...\n]',
    process: (jsonString) => {
      let squares;
      try {
        squares = JSON.parse(jsonString);
      } catch {
        throw "Invalid JSON";
      }
      if (!Array.isArray(squares)) throw "Unexpected Value. Expected an array";
      if (!squares.every((item) => item.name))
        throw "Unexpected Value. Every item must have a valid name property";

      return squares.map((item) => item.name);
    },
  },
};

export default function ImportForm({
  input,
  handleInput,
  error,
  setError,
  setSquares,
  onSubmitSuccess,
}) {
  const [importMode, setImportMode] = useState("Replace"); // "add" || "replace"
  const [dataShape, setDataShape] = useState("Complex"); // "complex" || "simple"

  const handleImportSubmit = (e) => {
    e.preventDefault();
    let squares;
    try {
      squares = dataShapes[dataShape].process(input);
    } catch (error) {
      setError(error);
      return;
    }

    switch (importMode) {
      case "Add":
        setSquares((oldSquares) => [...oldSquares, ...squares]);
        break;
      case "Replace":
        setSquares(squares);
        break;
    }
    onSubmitSuccess();
  };

  return (
    <form className="ImportForm" onSubmit={handleImportSubmit}>
      <h2>Import bingo squares from JSON</h2>
      <div className="ImportForm-toggle-container">
        <p>Import Mode:</p>
      <Toggle
        toggleState={importMode}
        setToggleState={setImportMode}
        option1="Add"
        option2="Replace"
      ></Toggle>
      </div>
      <div className="ImportForm-toggle-container">
        <p>Data Shape:</p>
      <Toggle
        toggleState={dataShape}
        setToggleState={setDataShape}
        option1="Complex"
        option2="Simple"
      ></Toggle>
      </div>
      <textarea
        value={input}
        onInput={handleInput}
        placeholder={dataShapes[dataShape].example}
      />
      {error ? <p>Import Error: {error}</p> : null}
      <button type="submit">Import</button>
    </form>
  );
}
