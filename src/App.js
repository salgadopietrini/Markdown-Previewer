import React, { useState } from "react";
import marked from "marked";

function TextEditor() {
  const [plainText, setPlainText] = useState("");

  const handleChange = (event) => {
    setPlainText(marked(event.target.value));
  };

  const rendT = () => {
    return {
      __html: plainText,
    };
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

      <div dangerouslySetInnerHTML={rendT()}></div>
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
