import { useInput } from "./hooks/useInput.jsx";
import { useDialog } from "./hooks/useDialog.jsx";
import { useState, useRef } from "preact/hooks";
import List from "./List.jsx";
import Dialog from "./Dialog.jsx";
import githubLogo from "../assets/iconmonstr-github-1.svg";

import "./styles/App.scss";
import ImportForm from "./ImportForm.jsx";

export default function App() {
  // const [bingoSquares, setBingoSquares] = useState([
  //   "farm STS",
  //   "acquire FUCKING HAT",
  //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, reprehenderit porro maxime voluptatibus ipsa quod vel deleniti, qui odio incidunt error ratione sapiente. Dignissimos quidem vero, voluptatem aperiam laboriosam corrupti!",
  // ]);
  const [bingoSquares, setBingoSquares] = useState([]);
  const [itemInput, setItemInput, handleItemInputChange] = useInput("");
  const itemInputRef = useRef();
  const [importInput, setImportInput, handleImportInputChange] = useInput("");
  const [importError, setImportError] = useState("");
  const { dialogOpen, openDialog, closeDialog } = useDialog(false, () => {
    setImportInput("");
    setImportError("");
  });

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (itemInput.trim() === "") return;
    // Add item
    setBingoSquares([...bingoSquares, itemInput]);
    setItemInput("");
    itemInputRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const removeItem = (index) => {
    const newSquares = [...bingoSquares];
    newSquares.splice(index, 1);
    setBingoSquares(newSquares);
  };

  const exportSquares = () => {
    navigator.clipboard.writeText(
      JSON.stringify(bingoSquares.map((v) => ({ name: v })))
    );
  };

  return (
    <div className="App">
      <h1 className="App-title">Custom Bingosync Board Maker</h1>
      <p className="App-description">
        This is a small app for{" "}
        <a href="https://bingosync.com">bingosync.com</a> to make custom bingo
        boards for you instead of writing the JSON by hand
      </p>
      <div className="App-list-container">
        <List items={bingoSquares} removeItem={removeItem} />
        <form className="App-list-controls" onSubmit={handleAddSubmit}>
          <label htmlFor="AddSquare">Add a bingo square:</label>
          <input
            id="AddSquare"
            type="text"
            autoComplete="off"
            placeholder="e.g. Farm STS"
            value={itemInput}
            ref={itemInputRef}
            onInput={handleItemInputChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
      <div className="App-controls">
        <button onClick={openDialog}>Import Squares</button>
        <button onClick={exportSquares}>Export squares to clipboard</button>
      </div>
      <p>Square count: {bingoSquares.length}</p>
      <a
        className="App-repo-link"
        href="https://github.com/Mana24/Custom-Bingo-Board-Maker"
      >
        <img className="App-github-icon" src={githubLogo}></img>
        <p>Github</p>
      </a>
      <Dialog dialogOpen={dialogOpen} close={closeDialog}>
        <ImportForm
          input={importInput}
          handleInput={handleImportInputChange}
          error={importError}
          setError={setImportError}
          setSquares={setBingoSquares}
          onSubmitSuccess={closeDialog}
        >
        </ImportForm>
      </Dialog>
    </div>
  );
}
