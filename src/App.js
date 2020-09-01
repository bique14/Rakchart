import React from "react";
import Setting from "./components/Setting";
import Preview from "./components/Preview";
import { useState } from "react";
import "./styles/main.css";

function App() {
  const [imageSrc, setImageSrc] = useState({});
  const [imageText, setImageText] = useState("");
  const [textPosition, setTextPosition] = useState({ x: 0, y: 0 });
  // console.log(`image text ${JSON.stringify(imageText)}`)
  // console.log(textPosition);

  return (
    <div className="flex flex-col min-h-screen">
      <Setting
        setImageSrc={setImageSrc}
        setImageText={setImageText}
        setTextPosition={setTextPosition}
        textPosition={textPosition}
      />
      <Preview
        imageSrc={imageSrc}
        imageText={imageText}
        textPosition={textPosition}
      />
      <button>Save!</button>
    </div>
  );
}

export default App;
