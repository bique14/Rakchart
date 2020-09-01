import React from "react";

import { useState } from "react";

function Preview(props) {
  const { imageSrc, imageText, textPosition } = props;
  const { x, y } = textPosition;

  return (
    <div className="mt-4">
      <span className="block">Preview</span>
      <div id="image-preview" style={{ width: "675px" }} className="border rounded relative">
        {imageSrc.length == 0 || Object.keys(imageSrc).length === 0 ? (
          "Not select an image"
        ) : (
          <img className="w-full" src={imageSrc}></img>
        )}

        <pre
          className="absolute text-white text-4xl"
          style={{ left: x, top: y }}
        >
          {imageText}
        </pre>
      </div>
    </div>
  );
}

export default Preview;

// const [position, setPosition] = useState({});
// onClick={(e) => {
//   setPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
// }}
