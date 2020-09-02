import React from "react";

function Preview(props) {
  const { imageSrc, imageText, textPosition, textConfig } = props;
  const { x, y } = textPosition;

  return (
    <div className="mt-4">
      <span className="block font-bold text-xl">Preview</span>
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

          <pre
            className="absolute text-white font-rakchart leading-8"
            style={{
              left: x,
              top: y,
              lineHeight: `${textConfig.gap}rem`,
              fontSize: `${textConfig.size}rem`,
              transform: `rotate(${textConfig.rotate}deg)`,
              textShadow: "2px 2px 10px black",
              textAlign: textConfig.align,
            }}
          >
            {imageText}
          </pre>
        </div>
        <span className="mx-6 self-center">{"V"}</span>
        <div>
          <img
            className=""
            id="screenshot"
            alt="example"
            style={{ width: "500px" }}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Preview;
