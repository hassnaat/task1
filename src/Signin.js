import React, { useState } from "react";
import "./Signin.css";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
export default function Signin() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const [bdate, setBdate] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="signup__box">
      <h1 className="form__heading">Sign Up</h1>
      <hr />
      <form>
        <div className="row">
          <div className="col-md-6">
            <label>First Name</label>
            <input
              type="text"
              className="input"
              onChange={(e) => {
                setFname(e.target.value);
              }}
              name="fname"
              value={fname}
            />
          </div>
          <div className="col-md-6">
            <label>Last Name</label>
            <input
              type="text"
              onChange={(e) => {
                setLname(e.target.value);
              }}
              className="input"
              name="lname"
              value={lname}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Country</label>
            <select
              className="s__input"
              onChange={(e) => {
                setCountry(e.target.value);
              }}
              value={country}
            >
              <option value=""></option>
              <option value="pakistan">Pakistan</option>
              <option value="bangladesh">Bangladesh</option>
            </select>
          </div>
          <div className="col-md-6">
            <label>Phone Number</label>
            <PhoneInput
              className="input"
              name="phone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <label>Email Address</label>
            <input
              type="email"
              className="input"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              name="email"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Password</label>
            <input
              type="password"
              className="input"
              onChange={(e) => {
                setPass(e.target.value);
              }}
              value={pass}
              name="password"
            />
          </div>
          <div className="col-md-6">
            <label>Confirm Password</label>
            <input
              type="password"
              onChange={(e) => {
                setCpass(e.target.value);
              }}
              value={cpass}
              className="input"
              name="cpassword"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 ">
            <label>Gender</label>
            <div className="gender">
              <span className="g1">
                <label for="male">Male</label>
                <input
                  id="male"
                  type="radio"
                  name="gender"
                  checked="checked"
                  onClick={(e) => {
                    setGender(e.target.value);
                  }}
                  value="male"
                />
              </span>
              <span className="g2">
                <label for="female">Female</label>
                <input
                  id="female"
                  type="radio"
                  name="gender"
                  onClick={(e) => {
                    setGender(e.target.value);
                  }}
                  value="female"
                />
              </span>
            </div>
          </div>
          <div className="col-md-6">
            <label>Birth Date</label>
            <input
              type="date"
              onChange={(e) => {
                setBdate(e.target.value);
              }}
              value={bdate}
              className="input"
              name="bdate"
            />
          </div>
        </div>
        <button className="signup__btn" type="submit">
          Create Account
        </button>
      </form>
      <br />
      <div>
        Already have an Account <Link to="/login">Login</Link>
      </div>
    </div>
  );
}
