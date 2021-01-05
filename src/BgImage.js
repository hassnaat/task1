import React from "react";
import "./BgImage.css";
import bg from "./images/img";
export default function BgImage() {
  return (
    <div className="box container-fluid">
      <img src={bg} width="100%" alt="background" />
      <div className="text">
        <p>This is dummy text This is dummy text This is dummy text</p>
        <p>This is dummy text This is dummy text This is dummy text</p>
        <p>This is dummy text This is dummy text This is dummy text</p>
      </div>
    </div>
  );
}
