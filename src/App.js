import React from "react";
import "./styles.css";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import BgImage from "./BgImage";
import Login from "./Login";
import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <div className="App">
        <Topbar />
        <Navbar />
        <div className="body row">
          <div className="img__box col-md-6">
            <BgImage />
          </div>
          <div className="form__box col-md-6">
            <Switch>
              <Route exact path="/">
                <Signin />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}
