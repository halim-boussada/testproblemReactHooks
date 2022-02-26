import React from "react";

function Disconnect({ name, setloged }) {
  function disconnect() {
    var connectedv = JSON.parse(localStorage.getItem("connected"));
    for (var i = 0; i < connectedv.length; i++) {
      if (connectedv[i].name === name) {
        connectedv[i].connected = false;
      }
    }
    localStorage.setItem("connected", JSON.stringify(connectedv));
    setloged(false);
  }
  return (
    <h1 className="h3 mb-3">
      <button
        className="btn btn-danger"
        onClick={() => {
          disconnect();
        }}
      >
        disconnect
      </button>
    </h1>
  );
}

export default Disconnect;
