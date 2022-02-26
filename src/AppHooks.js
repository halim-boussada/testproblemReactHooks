import React, { useState, useEffect } from "react";
import Login from "./components/Login";

import "./style/App.css";
import Chat from "./components/Chat";
function AppHooks() {
  var [name, setname] = useState("");
  var [userImage, setuserImage] = useState("");
  var [connected, setconnected] = useState([]);
  var [loged, setloged] = useState(true);
  var [list, setlist] = useState([]);

  useEffect(() => {
    setname(localStorage.getItem("username"));
    setuserImage(localStorage.getItem("userimage"));
    setlist(
      JSON.parse(localStorage.getItem("listOfMessages")).reverse().slice(0, 25)
    );
    setloged(false);
  }, []);

  return (
    <div>
      {loged ? (
        <Chat
          name={name}
          list={list}
          setlist={setlist}
          setname={setname}
          userImage={userImage}
          setuserImage={setuserImage}
          connected={connected}
          setconnected={setconnected}
          setloged={setloged}
        />
      ) : (
        <Login
          setname={setname}
          setuserImage={setuserImage}
          setloged={setloged}
          setconnected={setconnected}
        />
      )}
    </div>
  );
}

export default AppHooks;
