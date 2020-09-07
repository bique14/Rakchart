import React from "react";
import Draggable from "react-draggable";
import { useState, useEffect } from "react";

function Preview(props) {
  const { imageSrc, imageText, textConfig } = props;
  // const { x, y } = textPosition;
  var [activeDrags, setActiveDrags] = useState(0);

  function onStart() {
    setActiveDrags(++activeDrags);
  }

  function onStop() {
    setActiveDrags(--activeDrags);
  }
  const dragHandlers = { onStart: onStart, onStop: onStop };

  const [imgWidth, setImageWidth] = useState(0);
  const [imgHeight, setImageHeight] = useState(0);
  useEffect(() => {
    const img =
      document.getElementById("image-preview") === null
        ? 0
        : document.getElementById("image-preview");

    const pre =
      document.getElementById("text-preview") === null
        ? 0
        : document.getElementById("text-preview");
    setImageWidth(
      isNaN(img.width - pre.clientWidth) ? 0 : img.width - pre.clientWidth
    );
    setImageHeight(
      isNaN(img.height - pre.clientHeight) ? 0 : img.height - pre.clientHeight
    );
  });

  return (
    <div className="mt-4">
      <span className="block font-bold text-xl">
        Preview
        <span className="text-red-600 text-sm font-bold">
          (**You can drag text in image**)
        </span>
      </span>

      <div className="block">
        <div
          id="image-preview-container"
          style={{ width: "500px" }}
          className="rounded relative"
        >
          {imageSrc.length === 0 || Object.keys(imageSrc).length === 0 ? (
            "Not select an image"
          ) : (
            <img
              className="w-full"
              src={imageSrc}
              alt="preview"
              id="image-preview"
              style={{ width: "500px" }}
            ></img>
          )}

          <div
            className="absolute"
            id="text-preview"
            style={{
              left: 0,
              top: 0,
              transform: `rotate(${textConfig.rotate}deg)`,
            }}
          >
            <Draggable
              bounds={{ top: 0, left: 0, right: imgWidth, bottom: imgHeight }}
              {...dragHandlers}
            >
              <pre
                className="text-white font-rakchart leading-8"
                id="text-preview"
                style={{
                  lineHeight: `${textConfig.gap}rem`,
                  fontSize: `${textConfig.size}rem`,
                  // transform: `rotate(${textConfig.rotate}deg)`,
                  textShadow: "2px 2px 10px black",
                  textAlign: textConfig.align,
                }}
              >
                {imageText}
              </pre>
            </Draggable>
          </div>
        </div>
        <span className="mx-6 self-center">{"V"}</span>
        <div>
          <img
            className=""
            id="screenshot"
            alt="screenshot"
            style={{ width: "500px" }}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Preview;
