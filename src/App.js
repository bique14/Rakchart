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
      <button className="bg-blue-500 text-white text-xl rounded w-20 hover:bg-blue-600">
        Save!
      </button>
      <Preview
        imageSrc={imageSrc}
        imageText={imageText}
        textPosition={textPosition}
      />
    </div>
  );
}
// window.onload = function () {
//   console.log('hello world')
// }
export default App;
