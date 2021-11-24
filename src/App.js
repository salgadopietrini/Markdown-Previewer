import React, { useState } from "react";
import * as marked from "marked";

marked.setOptions({
  breaks: true,
});

function TextEditor() {
  const [plainText, setPlainText] = useState(
    `# This is an H1
        ## This is an H2

        [This a link]()

        This is an inline code: \`<div></div>\`

        \`\`\`
        This is a block of code
        let a=123,
        let b=123,
        console.log(a+b)
        \`\`\`

        1. This is the first element of a list.
        2. This is the second element of a list.

        >This is a blockquote

        ![This is an image](https://static.thenounproject.com/png/526867-200.png 'This is the hover text') 

        "**This text is bolded**"
      `
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
