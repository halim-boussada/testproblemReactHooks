import React from "react";

function MessagesBody({ numberOfMessages, list, setnumberOfMessages, name }) {
  function renderMore() {
    const newNumber = numberOfMessages + 25;
    setnumberOfMessages(newNumber);
  }
  return (
    <div className="position-relative">
      <div className="chat-messages p-4" id="body">
        {JSON.parse(localStorage.getItem("listOfMessages")).length >
        numberOfMessages ? (
          <button
            className="button-17"
            onClick={() => {
              renderMore();
            }}
          >
            Show more ...
          </button>
        ) : null}
        {list.reverse().map((msg) => {
          return (
            <div>
              {name === msg.name ? (
                <div className="chat-message-right mb-4">
                  <div>
                    <img
                      src={msg.userImage}
                      className="rounded-circle mr-1"
                      alt="Chris Wood"
                      width="40"
                      height="40"
                    />
                    <div className="text-muted small text-nowrap mt-2">
                      {msg.date}
                    </div>
                  </div>
                  <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                    <div className="font-weight-bold mb-1">
                      <strong>You</strong>
                    </div>
                    {msg.message}
                  </div>
                </div>
              ) : (
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
                      <strong>{msg.name}</strong>
                    </div>
                    {msg.message}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessagesBody;
