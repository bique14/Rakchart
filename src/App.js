import React from "react";
import Setting from "./components/Setting";
import Preview from "./components/Preview";
import { useState } from "react";
import "./styles/main.css";
import html2canvas from "html2canvas";

function App() {
  const [imageSrc, setImageSrc] = useState({});
  const [imageText, setImageText] = useState("");
  // const [textPosition, setTextPosition] = useState({ x: 0, y: 0 });
  const [pathToDownload, setPathToDownload] = useState("");
  const [textConfig, setTextConfig] = useState({
    color: "",
    gap: 2,
    rotate: 0,
    size: 2,
    align: "left",
  });

  function save() {
    const preview = document.getElementById("image-preview-container");

    html2canvas(preview, {
      logging: true,
      profile: true,
      useCORS: true,
      scrollX: 0,
      scrollY: -window.scrollY,
    }).then(function (canvas) {
      document.getElementById("screenshot").src = null;
      const data = canvas.toDataURL("image/jpeg", 1.0);
      const src = encodeURI(data);
      document.getElementById("screenshot").src = src;
      setPathToDownload(src);
      // document.getElementById("size").innerHTML = src.length + " bytes";
      // Force download
      // const forceDownload = document.createElement("a");
      // forceDownload.style.display = "none";
      // document.body.appendChild(forceDownload);
      // forceDownload.href = src
      // forceDownload.setAttribute("download", "rakchart.png");
      // forceDownload.click();
      // window.URL.revokeObjectURL(forceDownload.href);
      // document.body.removeChild(forceDownload);
    });
  }

  return (
    <div className="flex flex-col min-h-screen m-4">
      <Setting
        setImageSrc={setImageSrc}
        setImageText={setImageText}
        // setTextPosition={setTextPosition}
        // textPosition={textPosition}
        textConfig={textConfig}
        setTextConfig={setTextConfig}
      />
      <button
        className="mt-4 bg-blue-500 text-white rounded w-full py-2 hover:bg-blue-600 hover:shadow"
        onClick={save}
      >
        <a className="block w-full" href="/#screenshot">
          Render image
        </a>
      </button>
      <Preview
        imageSrc={imageSrc}
        imageText={imageText}
        // textPosition={textPosition}
        textConfig={textConfig}
      />
      {document.getElementById("screenshot") === null ||
      document.getElementById("screenshot").src.length === 0 ? (
        <div className="hidden"></div>
      ) : (
        <a
          className="my-4 rounded p-1 text-center text-white text-xl bg-green-400 py-2 font-bold hover:bg-green-500 hover:shadow"
          href={pathToDownload}
          download="rakchart.png"
        >
          Download Image
        </a>
      )}
    </div>
  );
}

export default App;
