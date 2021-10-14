import React, { useState } from "react";

function TextEditor() {
  const [plainText, setPlainText] = useState("");

  const handleChange = (event) => {
    setPlainText(event.target.value);
  };

  return (
    <div>
      <div>Text Editor</div>
      <label for="textEditor">Text Editor</label>
      <textarea
        id="textEditor"
        name="textEditor"
        rows="4"
        cols="50"
        onChange={handleChange}
      />

      <div>{plainText}</div>
    </div>
  );
}

function RenderedText() {
  return (
    <div>
      <div>Rendered Text</div>
    </div>
  );
}

function App() {
  return (
    <div>
      <div>
        <TextEditor />
      </div>
      <div>
        <RenderedText />
      </div>
    </div>
  );
}

export default App;
