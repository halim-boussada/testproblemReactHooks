import React from "react";
import { get } from "../helpers/helpers.js";

const MessagesBody = ({
  numberOfMessages,
  list,
  setnumberOfMessages,
  name,
}) => {
  return (
    <div className="position-relative">
      <div className="chat-messages p-4" id="body">
        {get("listOfMessages").length > numberOfMessages ? (
          <button
            className="button-17"
            onClick={() => {
              setnumberOfMessages(numberOfMessages + 25);
            }}
          >
            Show more ...
          </button>
        ) : null}
        {list.reverse().map((msg) => {
          return (
            <div>
              <div className="chat-message-left pb-4">
                <div>
                  <img
                    src={msg.userImage}
                    className="rounded-circle mr-1"
                    alt="Sharon Lessman"
                    width="40"
                    height="40"
                  />
                  <div className="text-muted small text-nowrap mt-2">
                    {msg.date}
                  </div>
                </div>
                <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                  <div className="font-weight-bold mb-1">
                    <strong> {name === msg.name ? msg.name : "You"} </strong>
                  </div>
                  {msg.message}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MessagesBody;
