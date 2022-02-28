import React, { useState } from "react";
import { set, get } from "../helpers/helpers.js";
const Login = ({ setname, setuserImage, setloged, setconnected }) => {
  var [nameError, setnameError] = useState(false);
  var [user, setUser] = useState("");
  // login function
  const login = () => {
    var images = get("images");
    if (user) {
      if (!get("connected")) {
        set("connected", []);
      }
      const namev = user;
      setname(namev);
      var connectedv = get("connected");
      var alreadyconnected = false;
      connectedv.forEach((element) => {
        if (element.name === namev) {
          alreadyconnected = true;
          setuserImage(element.image);
        }
      });
      if (!alreadyconnected) {
        var rondomImage = Math.floor(Math.random() * images.length);
        setuserImage(images[rondomImage]);
        connectedv.push({
          name: namev,
          image: images[rondomImage],
          connected: true,
        });
        images.splice(rondomImage, 1);
        set("images", images);
        set("connected", connectedv);
      }
      setloged(true);
      setconnected(connectedv);
      setnameError(false);
    } else {
      setnameError(true);
    }
  };

  return (
    <div id="signin">
      <div className="form-outline mb-4">
        <label className="form-label" for="form2Example1">
          Username
        </label>
        <input
          type="email"
          id="form2Example1"
          className="form-control"
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        {nameError ? <div id="error">please add Username</div> : null}
      </div>
      <button
        type="submit"
        className="btn btn-primary btn-block mb-4"
        placeholder="Username"
        onClick={() => {
          login();
        }}
      >
        Sign in
      </button>
    </div>
  );
};

export default Login;
