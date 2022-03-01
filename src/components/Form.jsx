import React from "react";
import moment from "moment";
import { set, get, scrollDown } from "../helpers/helpers.js";

const Form = ({ msg, setlist, setmsg, userImage, name }) => {
  // send the message function
  const sendMsg = (e) => {
    e.preventDefault();
    if (msg.length) {
      const listv = get("listOfMessages");
      listv.unshift({
        name: name,
        message: msg,
        date: moment(new Date()).format("h:mm a"),
        userImage: userImage,
      });
      set("listOfMessages", listv);
      setlist(listv);
      setmsg("");
      scrollDown();
    }
  };

  return (
    <div class="flex-grow-0 py-3 px-4 border-top">
      <form class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="Type your message"
          value={msg}
          onChange={(e) => {
            setmsg(e.target.value);
          }}
        />
        <button
          class="btn btn-primary"
          type="submit"
          onClick={(e) => {
            sendMsg(e);
          }}
        >
          send
        </button>
      </form>
    </div>
  );
};

export default Form;
