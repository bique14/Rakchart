import React from "react";

import { useState } from "react";

function Preview(props) {
  const { imageSrc } = props;
  // console.log(imageSrc);

  return (
    <div className="mt-4">
      <span className="block">Preview</span>
      {imageSrc.length == 0 || Object.keys(imageSrc).length === 0 ? (
        "Not select an image"
      ) : (
        <img src={imageSrc}></img>
      )}
    </div>
  );
}

export default Preview;
