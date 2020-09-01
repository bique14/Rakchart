import React from "react";
import { useState } from "react";

function Setting(props) {
  const { setImageSrc, setImageText } = props;

  return (
    <div className="flex flex-col">
      <span className="block">setting</span>
      <input
        type="file"
        onChange={(event) => {
          setImageSrc(
            event.target.files[0] == undefined
              ? {}
              : URL.createObjectURL(event.target.files[0])
          );
        }}
      />
      <textarea
        className="border-2"
        onChange={(event) => {
          setImageText(event.target.value);
        }}
      ></textarea>
    </div>
  );
}

export default Setting;
