import React from "react";
import { set, get } from "../helpers/helpers.js";

const Disconnect = ({ name, setloged }) => {
  // disconnect function that will change the state of the loged
  const disconnect = () => {
    const connectedv = get("connected");
    connectedv.forEach((element) => {
      if (element.name === name) {
        element.connected = false;
      }
    });
    set("connected", connectedv);
    setloged(false);
  };
  return (
    <h1 class="h3 mb-3">
      <button
        class="btn btn-danger"
        onClick={() => {
          disconnect();
        }}
      >
        disconnect
      </button>
    </h1>
  );
};

export default Disconnect;
