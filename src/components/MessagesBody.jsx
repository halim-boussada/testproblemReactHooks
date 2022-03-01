import React from "react";
import Message from "./Message.jsx";
import { get } from "../helpers/helpers.js";

// messages body component
const MessagesBody = ({
  numberOfMessages,
  list,
  setnumberOfMessages,
  name,
}) => {
  return (
    <div class="position-relative">
      <div class="chat-messages p-4" id="body">
        {get("listOfMessages").length > numberOfMessages ? (
          <button
            class="button-17"
            onClick={() => {
              setnumberOfMessages(numberOfMessages + 25);
            }}
          >
            Show more ...
          </button>
        ) : null}
        {list.reverse().map((msg) => (
          <div
            class={
              name === msg.name
                ? "chat-message-right pb-4"
                : "chat-message-left pb-4"
            }
          >
            <Message
              name={name === msg.name ? "You" : msg.name}
              message={msg}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagesBody;
