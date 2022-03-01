import React, { useState, useEffect } from "react";
import Login from "./view/Login";
import { get } from "./helpers/helpers.js";
import "./style/App.css";
import Chat from "./view/Chat";

const AppHooks = () => {
  const [name, setname] = useState("");
  const [userImage, setuserImage] = useState("");
  const [connected, setconnected] = useState([]);
  const [loged, setloged] = useState(true);
  const [list, setlist] = useState([]);

  useEffect(() => {
    setname(get("username"));
    setuserImage(get("userimage"));
    setlist(get("listOfMessages").reverse().slice(0, 25));
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
};

export default AppHooks;
