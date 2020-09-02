import React from "react";

function Setting(props) {
  const { setImageSrc, setImageText, setTextPosition, textPosition } = props;

  return (
    <div className="flex flex-col">
      <span className="block">setting</span>
      <input
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
        onChange={(event) => {
          setImageText(event.target.value);
        }}
      ></textarea>
      <div className="flex flex-col">
        <TextPosition
          setTextPosition={setTextPosition}
          textPosition={textPosition}
        />
        <div className="flex flex-row">
          <span>color, rotate, font-size, leading:</span>
          <span>not implemented</span>
        </div>
      </div>
    </div>
  );
}

function TextPosition(props) {
  const { setTextPosition, textPosition } = props;
  return (
    <div className="flex flex-col">
      <span>Position</span>
      <div className="flex flex-row">
        <span>x:</span>
        <input
          className="border rounded"
          type="number"
          onChange={(event) => {
            setTextPosition({ x: +event.target.value, y: textPosition.y });
          }}
        ></input>
      </div>
      <div className="flex flex-row">
        <span>y:</span>
        <input
          className="border rounded"
          type="number"
          onChange={(event) => {
            setTextPosition({ y: +event.target.value, x: textPosition.x });
          }}
        ></input>
      </div>
    </div>
  );
}

export default Setting;
