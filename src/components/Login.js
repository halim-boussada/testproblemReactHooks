import React, { useState } from "react";

function Login({ setname, setuserImage, setloged, setconnected }) {
  var [nameError, setnameError] = useState(false);
  var [user, setUser] = useState("");

  function login() {
    var images = JSON.parse(localStorage.getItem("images"));
    if (user) {
      if (!localStorage.getItem("connected")) {
        localStorage.setItem("connected", JSON.stringify([]));
      }
      const namev = user;
      setname(namev);
      var connectedv = JSON.parse(localStorage.getItem("connected"));
      var alreadyconnected = false;
      for (var i = 0; i < connectedv.length; i++) {
        if (connectedv[i].name === namev) {
          alreadyconnected = true;
          setuserImage(connectedv[i].image);
        }
      }
      if (!alreadyconnected) {
        var rondomImage = Math.floor(Math.random() * images.length);
        setuserImage(images[rondomImage]);
        connectedv.push({
          name: namev,
          image: images[rondomImage],
          connected: true,
        });
        images.splice(rondomImage, 1);
        localStorage.setItem("images", JSON.stringify(images));
        localStorage.setItem("connected", JSON.stringify(connectedv));
      }
      setloged(true);
      setconnected(connectedv);
      setnameError(false);
    } else {
      setnameError(true);
    }
  }

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
}

export default Login;
