import React from "react";

function Setting(props) {
  const {
    setImageSrc,
    setImageText,
    setTextPosition,
    textPosition,
    textConfig,
    setTextConfig,
  } = props;

  // function getImageSize() {
  //   var img = document.getElementById("preview-image");
  //   //or however you get a handle to the IMG
  //   var width = img.height;
  //   var height = img.width;
  //   console.log(width, height)
  // }
  // getImageSize()

  // var width = img.height;
  // var height = img.width;
  // console.log(width, height);

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
        <TextGap textConfig={textConfig} setTextConfig={setTextConfig} />
        <TextSize textConfig={textConfig} setTextConfig={setTextConfig} />
        <TextRotate textConfig={textConfig} setTextConfig={setTextConfig} />
        <div className="flex flex-row">
          <span>color:</span>
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
          min={0}
          max={500}
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
          min={0}
          onChange={(event) => {
            setTextPosition({ y: +event.target.value, x: textPosition.x });
          }}
        ></input>
      </div>
    </div>
  );
}

function TextGap(props) {
  const { textConfig, setTextConfig } = props;
  return (
    <div className="flex flex-row">
      <span>gap sapce:</span>
      <input
        className="border rounded"
        type="number"
        value={textConfig.gap}
        onChange={(event) => {
          setTextConfig({
            gap: +event.target.value,
            color: textConfig.size,
            rotate: textConfig.rotate,
            size: textConfig.size,
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
      <span>font size:</span>
      <input
        className="border rounded"
        type="number"
        min={2}
        value={textConfig.size}
        onChange={(event) => {
          setTextConfig({
            size: +event.target.value,
            gap: textConfig.gap,
            color: textConfig.size,
            rotate: textConfig.rotate,
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
      <span>Rotate:</span>
      <input
        className="border rounded"
        type="number"
        value={textConfig.rotate}
        onChange={(event) => {
          setTextConfig({
            rotate: +event.target.value,
            gap: textConfig.gap,
            color: textConfig.size,
            size: textConfig.size,
          });
        }}
      ></input>
    </div>
  );
}

export default Setting;
