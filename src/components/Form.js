import React from "react";
import moment from "moment";

function Form({ msg, setlist, setmsg, userImage, name }) {

  function sendMsg() {
    if (msg.length) {
      if (!localStorage.getItem("listOfMessages")) {
        localStorage.setItem("listOfMessages", JSON.stringify([]));
      }
      var listv = JSON.parse(localStorage.getItem("listOfMessages"));
      listv.unshift({
        name: name,
        message: msg,
        date: moment(new Date()).format("h:mm a"),
        userImage: userImage,
      });
      localStorage.setItem("listOfMessages", JSON.stringify(listv));
      setlist(listv);
      setmsg("");
      document.getElementById("body").scrollTop =
        document.getElementById("body").scrollHeight;
    }
  }

  return (
    <div className="flex-grow-0 py-3 px-4 border-top">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Type your message"
          value={msg}
          onChange={(e) => {
            setmsg(e.target.value);
          }}
        />
        <button
          className="btn btn-primary"
          onClick={() => {
            sendMsg();
          }}
        >
          send
        </button>
      </div>
    </div>
  );
}

export default Form;
