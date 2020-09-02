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
  const [textConfig, setTextConfig] = useState({
    color: "",
    gap: 2,
    rotate: 0,
    size: 2,
  });

  function save() {
    const preview = document.getElementById("image-preview-container");

    html2canvas(preview, {
      logging: true,
      profile: true,
      useCORS: true,
    }).then(function (canvas) {
      const data = canvas.toDataURL("image/jpeg", 0.9);
      const src = encodeURI(data);
      document.getElementById("screenshot").src = src;
      setPathToDownload(src);
      // document.getElementById("size").innerHTML = src.length + " bytes";
    });
  }

  return (
    <div className="flex flex-col min-h-screen m-4">
      <Setting
        setImageSrc={setImageSrc}
        setImageText={setImageText}
        setTextPosition={setTextPosition}
        textPosition={textPosition}
        textConfig={textConfig}
        setTextConfig={setTextConfig}
      />
      <button
        className="bg-blue-500 text-white rounded w-full py-2 hover:bg-blue-600 hover:shadow"
        onClick={save}
      >
        Render image
      </button>
      <Preview
        imageSrc={imageSrc}
        imageText={imageText}
        textPosition={textPosition}
        textConfig={textConfig}
      />
      <a
        className="rounded p-1 text-center text-white text-xl bg-green-400 py-2 font-bold hover:bg-green-500 hover:shadow"
        href={pathToDownload}
        download="rakchart.png"
      >
        Download Image
      </a>
      <div className="text-blue-600">
        <span>Bug report : </span>
        <a href="https://github.com/bique14/Rakchart/issues/new" target="_blank">click here</a>
      </div>
    </div>
  );
}
// window.onload = function () {
//   console.log('hello world')
// }
export default App;
