import React from "react";

function Preview(props) {
  const { imageSrc, imageText, textPosition } = props;
  const { x, y } = textPosition;

  return (
    <div className="mt-4">
      <span className="block">Preview</span>
      <div className="block">
        <div
          id="image-preview"
          style={{ width: "500px" }}
          className="border rounded relative"
        >
          {imageSrc.length === 0 || Object.keys(imageSrc).length === 0 ? (
            "Not select an image"
          ) : (
            <img
              className="w-full"
              src={imageSrc}
              alt="preview"
              style={{ width: "500px" }}
            ></img>
          )}

          <pre
            className="absolute text-white text-4xl font-rakchart leading-8"
            style={{ left: x, top: y }}
          >
            {imageText}
          </pre>
        </div>
        <span className="mx-6 self-center">{">>"}</span>
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

// const [position, setPosition] = useState({});
// onClick={(e) => {
//   setPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
// }}
