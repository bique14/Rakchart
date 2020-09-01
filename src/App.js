import React from "react";
import Setting from "./components/Setting";
import Preview from "./components/Preview";
import { useState } from "react";
import "./styles/main.css";
import html2canvas from "html2canvas";

function App() {
  const [imageSrc, setImageSrc] = useState({});
  const [imageText, setImageText] = useState("");
  const [textPosition, setTextPosition] = useState({ x: 0, y: 0 });
  const [pathToDownload, setPathToDownload] = useState("");
  // console.log(`image text ${JSON.stringify(imageText)}`)
  // console.log(textPosition);

  function save() {
    const preview = document.getElementById("image-preview");

    html2canvas(preview, {
      logging: true,
      profile: true,
      useCORS: true,
    }).then(function (canvas) {
      var data = canvas.toDataURL("image/jpeg", 0.9);
      var src = encodeURI(data);
      document.getElementById("screenshot").src = src;
      setPathToDownload(src);
      // document.getElementById("size").innerHTML = src.length + " bytes";
    });
  }

  return (
    <div className="flex flex-col min-h-screen">
      <a href={pathToDownload} download="rakchart.png">
        Download
      </a>

      <Setting
        setImageSrc={setImageSrc}
        setImageText={setImageText}
        setTextPosition={setTextPosition}
        textPosition={textPosition}
      />
      <button
        className="bg-blue-500 text-white text-xl rounded w-20 hover:bg-blue-600"
        onClick={save}
      >
        Render!
      </button>
      <Preview
        imageSrc={imageSrc}
        imageText={imageText}
        textPosition={textPosition}
      />
      <img className="w-40" id="screenshot"></img>
    </div>
  );
}
// window.onload = function () {
//   console.log('hello world')
// }
export default App;
