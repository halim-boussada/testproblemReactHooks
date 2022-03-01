import React from "react";

// one message component
const Message = ({ message, name }) => {
  return (
    <div>
      <div class="chat-message-left pb-4">
        <div>
          <img
            src={message.userImage}
            class="rounded-circle mr-1"
            alt="Sharon Lessman"
            width="40"
            height="40"
          />
          <div class="text-muted small text-nowrap mt-2">{message.date}</div>
        </div>
        <div class="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
          <div class="font-weight-bold mb-1">
            <strong> {name} </strong>
          </div>
          {message.message}
        </div>
      </div>
    </div>
  );
};

export default Message;
