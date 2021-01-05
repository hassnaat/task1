import React from "react";
import "./Navbar.css";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";

export default function Navbar() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="nav__bar">
          <div className="item1">
            <span>
              <FormatAlignLeftIcon />
            </span>
            <span>Browse Categories</span>
          </div>
          <div className="item2">How to Borrow</div>
          <div className="item3">About Borrow</div>
          <div className="item4">Contact</div>
        </div>
      </div>
    </div>
  );
}
