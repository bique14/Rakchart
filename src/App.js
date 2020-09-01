import React from "react";
import Setting from "./components/Setting";
import Preview from "./components/Preview";
import { useState } from "react";
import "./styles/main.css";

function App() {
  const [imageSrc, setImageSrc] = useState({});
  const [imageText, setImageText] = useState("");
  // console.log(`image text ${JSON.stringify(imageText)}`)
  return (
    <div className="flex flex-col min-h-screen">
      <Setting setImageSrc={setImageSrc} setImageText={setImageText} />
      <Preview imageSrc={imageSrc} />
    </div>
  );
}

export default App;
