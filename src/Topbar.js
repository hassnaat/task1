import React from "react";
import "./Topbar.css";
import EmailIcon from "@material-ui/icons/Email";

export default function Topbar() {
  return (
    <div className="container">
      <div className="top__bar">
        <div className="t__brand">BrandName</div>
        <div className="t__items">
          <span>
            <button>POST AN ITEM</button>
          </span>
          <span className="msg__item">
            <EmailIcon />
            <p>Message Center</p>
          </span>
          <span>Sign In</span>
        </div>
      </div>
    </div>
  );
}
