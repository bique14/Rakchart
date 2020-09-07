import React from "react";
// import { useState, useEffect } from "react";

function Setting(props) {
  const { setImageSrc, setImageText, setTextConfig, textConfig } = props;

  // const [imgWidth, setImageWidth] = useState(0);
  // const [imgHeight, setImageHeight] = useState(0);

  // useEffect(() => {
  //   const img =
  //     document.getElementById("image-preview") === null
  //       ? 0
  //       : document.getElementById("image-preview");

  //   const pre =
  //     document.getElementById("text-preview") === null
  //       ? 0
  //       : document.getElementById("text-preview");
  //   setImageWidth(
  //     isNaN(img.width - pre.clientWidth) ? 0 : img.width - pre.clientWidth
  //   );
  //   setImageHeight(
  //     isNaN(img.height - pre.clientHeight) ? 0 : img.height - pre.clientHeight
  //   );
  // });

  return (
    <div className="flex flex-col bg-gray-300 rounded px-4 py-2">
      <h1 className="font-bold text-xl border-b border-gray-600 mb-1 pt-1 pb-2">
        Setting
      </h1>
      <input
        className="my-2"
        type="file"
        onChange={(event) => {
          setImageSrc(
            event.target.files[0] === undefined
              ? {}
              : URL.createObjectURL(event.target.files[0])
          );
        }}
      />
      <textarea
        className="border-2 h-20"
        style={{ resize: "none" }}
        placeholder="Type text here.."
        onChange={(event) => {
          setImageText(event.target.value);
        }}
      ></textarea>
      <div className="flex flex-col rounded bg-gray-500 my-2 px-4 py-2">
        <span className="font-bold">Text config</span>
        {/* <TextPosition
          setTextPosition={setTextPosition}
          textPosition={textPosition}
          imgWidth={imgWidth}
          imgHeight={imgHeight}
        /> */}
        <TextGap textConfig={textConfig} setTextConfig={setTextConfig} />
        <TextSize textConfig={textConfig} setTextConfig={setTextConfig} />
        <TextRotate textConfig={textConfig} setTextConfig={setTextConfig} />
        <TextAlign textConfig={textConfig} setTextConfig={setTextConfig} />
      </div>
    </div>
  );
}

// function TextPosition(props) {
//   const { setTextPosition, textPosition, imgWidth, imgHeight } = props;

//   return (
//     <div className="flex flex-row">
//       <span className="mr-2">Position</span>
//       <div className="flex flex-row mr-2">
//         <span className="mr-1">x:</span>
//         <input
//           className="border rounded w-16"
//           type="number"
//           min={0}
//           max={imgWidth}
//           value={textPosition.x}
//           onChange={(event) => {
//             setTextPosition({ x: +event.target.value, y: textPosition.y });
//           }}
//         ></input>
//       </div>
//       <div className="flex flex-row">
//         <span className="mr-1">y:</span>
//         <input
//           className="border rounded w-16"
//           type="number"
//           min={0}
//           max={imgHeight}
//           value={textPosition.y}
//           onChange={(event) => {
//             setTextPosition({ y: +event.target.value, x: textPosition.x });
//           }}
//         ></input>
//       </div>
//     </div>
//   );
// }

function TextGap(props) {
  const { textConfig, setTextConfig } = props;
  return (
    <div className="flex flex-row">
      <span>White space between words:</span>
      <input
        className="border rounded w-16"
        type="number"
        value={textConfig.gap}
        onChange={(event) => {
          setTextConfig({
            gap: +event.target.value,
            color: textConfig.size,
            rotate: textConfig.rotate,
            size: textConfig.size,
            align: textConfig.align,
          });
        }}
      ></input>
    </div>
  );
}

function TextSize(props) {
  const { textConfig, setTextConfig } = props;
  return (
    <div className="flex flex-row">
      <span>Font size:</span>
      <input
        className="border rounded w-16"
        type="number"
        min={2}
        value={textConfig.size}
        onChange={(event) => {
          setTextConfig({
            size: +event.target.value,
            gap: textConfig.gap,
            color: textConfig.size,
            rotate: textConfig.rotate,
            align: textConfig.align,
          });
        }}
      ></input>
    </div>
  );
}

function TextRotate(props) {
  const { textConfig, setTextConfig } = props;
  return (
    <div className="flex flex-row">
      <span>Rotate (degrees):</span>
      <input
        className="border rounded w-16"
        type="number"
        value={textConfig.rotate}
        onChange={(event) => {
          setTextConfig({
            rotate: +event.target.value,
            gap: textConfig.gap,
            color: textConfig.size,
            size: textConfig.size,
            align: textConfig.align,
          });
        }}
      ></input>
    </div>
  );
}

function TextAlign(props) {
  const { textConfig, setTextConfig } = props;
  return (
    <div className="flex flex-row">
      <span>Align:</span>

      <label className="ml-4">
        <input
          className="mr-1"
          type="radio"
          id="left"
          name="align-radio"
          value="left"
          checked={textConfig.align === "left" ? true : false}
          onChange={(e) => {}}
          onClick={(event) => {
            setTextConfig({
              align: event.target.value,
              rotate: textConfig.rotate,
              gap: textConfig.gap,
              color: textConfig.size,
              size: textConfig.size,
            });
          }}
        />
        Left
      </label>
      <label className="ml-4">
        <input
          className="mr-1"
          type="radio"
          id="center"
          name="align-radio"
          value="center"
          checked={textConfig.align === "center" ? true : false}
          onChange={(e) => {}}
          onClick={(event) => {
            setTextConfig({
              align: event.target.value,
              rotate: textConfig.rotate,
              gap: textConfig.gap,
              color: textConfig.size,
              size: textConfig.size,
            });
          }}
        />
        Center
      </label>
      <label className="ml-4">
        <input
          className="mr-1"
          type="radio"
          id="right"
          name="align-radio"
          value="right"
          checked={textConfig.align === "right" ? true : false}
          onChange={(e) => {}}
          onClick={(event) => {
            setTextConfig({
              align: event.target.value,
              rotate: textConfig.rotate,
              gap: textConfig.gap,
              color: textConfig.size,
              size: textConfig.size,
            });
          }}
        />
        Right
      </label>
    </div>
  );
}

export default Setting;
