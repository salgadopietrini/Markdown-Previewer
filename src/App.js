import React, { useState } from "react";
import marked from "marked";

function TextEditor() {
  const [plainText, setPlainText] = useState(
    "<h1>This is a h1</h1>" +
      "<h2>This is a h2</h2>" +
      "<a href=''>This is a link</a>" +
      "<p><code>This is an inline code</code></p> " +
      "<code>This is a code block</code>" +
      "<ul><li>This is the first element of a list</li><li>This is the second element of a list</li></ul>" +
      "<blockquote cite=''>This is a blockquote</blockquote>" +
      "<img src='https://static.thenounproject.com/png/526867-200.png' alt='This is an image'>" +
      "<b>This text is bolded</b>"
  );

  const handleChange = (event) => {
    setPlainText(event.target.value);
  };

  const rendT = () => {
    return {
      __html: marked(plainText),
    };
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "50px",
      }}
    >
      <div style={{ width: "40vw", border: "2px solid" }}>
        <h1
          style={{
            height: "10%",
            padding: "0",
            margin: "0",
            textAlign: "center",
            paddingTop: "10px",
          }}
        >
          Text Editor
        </h1>

        <textarea
          id="editor"
          name="editor"
          rows="30"
          style={{ width: "100%", height: "90%", padding: "0", margin: "0" }}
          value={plainText}
          onChange={handleChange}
        />
      </div>
      <div style={{ width: "40vw", border: "2px solid" }}>
        <h1
          style={{
            height: "10%",
            padding: "0",
            margin: "0",
            textAlign: "center",
            paddingTop: "10px",
          }}
        >
          Text Preview
        </h1>
        <div
          dangerouslySetInnerHTML={rendT()}
          id="preview"
          style={{ borderTop: "2px solid", padding: "10px" }}
        ></div>
      </div>
    </div>
  );
}

function App() {
  return <TextEditor />;
}

export default App;
