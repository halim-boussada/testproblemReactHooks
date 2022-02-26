import React, { useState, useEffect } from "react";
import moment from "moment";
import "./App.css";
function List() {
  var [user, setUser] = useState("");
  var [name, setname] = useState("");
  var [msg, setmsg] = useState("");
  var [userImage, setuserImage] = useState("");
  var [list, setlist] = useState([]);
  var [connected, setconnected] = useState([]);
  var [loged, setloged] = useState(true);
  var [nameError, setnameError] = useState(false);
  var [numberOfMessages, setnumberOfMessages] = useState(25);

  useEffect(() => {
    setlist(
      JSON.parse(localStorage.getItem("listOfMessages")).reverse().slice(0, 25)
    );
    setloged(false);
  }, []);

  function login() {
    var images = JSON.parse(localStorage.getItem("images"));
    if (user) {
      if (!localStorage.getItem("connected")) {
        localStorage.setItem("connected", JSON.stringify([]));
      }
      const namev = user;
      setname(namev);
      var connectedv = JSON.parse(localStorage.getItem("connected"));
      var alreadyconnected = false;
      for (var i = 0; i < connectedv.length; i++) {
        if (connectedv[i].name === namev) {
          alreadyconnected = true;
          setuserImage(connectedv[i].image);
        }
      }
      if (!alreadyconnected) {
        var rondomImage = Math.floor(Math.random() * images.length);
        setuserImage(images[rondomImage]);
        connectedv.push({
          name: namev,
          image: images[rondomImage],
          connected: true,
        });
        images.splice(rondomImage, 1);
        localStorage.setItem("images", JSON.stringify(images));
        localStorage.setItem("connected", JSON.stringify(connectedv));
      }
      setloged(true);
      setconnected(connectedv);
      setnameError(false);
      document.getElementById("body").scrollTop =
        document.getElementById("body").scrollHeight;
    } else {
      setnameError(true);
    }
  }

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

  function renderMore() {
    const newNumber = numberOfMessages + 25;
    setnumberOfMessages(newNumber);
  }

  setInterval(() => {
    setlist(
      JSON.parse(localStorage.getItem("listOfMessages"))
        .reverse()
        .slice(0, numberOfMessages)
    );
    setconnected(JSON.parse(localStorage.getItem("connected")));
  }, 1000);

  return (
    <div>
      <div>
        {loged ? (
          <main className="content">
            <div className="container p-2">
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

              <div className="card" id="darker">
                <div className="row g-0">
                  <div className="col-12 col-lg-5 col-xl-3 border-right">
                    <div className="px-4 d-none d-md-block">
                      <div className="d-flex align-items-center"></div>
                    </div>

                    <div className="list-group-item list-group-item-action border-0">
                      {connected.map((user) => {
                        return (
                          <div className="d-flex align-items-start">
                            <img
                              src={user.image}
                              className="rounded-circle mr-1"
                              alt="William Harris"
                              width="40"
                              height="40"
                            />

                            <div className="flex">
                              <strong>{user.name}</strong>
                              <div className="small">
                                {user.connected ? (
                                  <div id="online"></div>
                                ) : (
                                  <div id="offline"></div>
                                )}
                                Online
                              </div>
                              <hr id="hr"></hr>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <hr className="d-block d-lg-none mt-1 mb-0" />
                  </div>
                  <div className="col-12 col-lg-7 col-xl-9">
                    <div className="py-2 px-4 border-bottom d-none d-lg-block">
                      <div className="d-flex align-items-center py-1">
                        <div className="position-relative"></div>
                        <div className="flex-grow-1 pl-3">
                          <strong>Group conversation</strong>
                          <div className="text-muted small"></div>
                        </div>
                        <div></div>
                      </div>
                    </div>

                    <div className="position-relative">
                      <div className="chat-messages p-4" id="body">
                        {JSON.parse(localStorage.getItem("listOfMessages"))
                          .length > numberOfMessages ? (
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
                  </div>
                </div>
              </div>
            </div>
          </main>
        ) : (
          <div id="signin">
            <div className="form-outline mb-4">
              <label className="form-label" for="form2Example1">
                Username
              </label>
              <input
                type="email"
                id="form2Example1"
                className="form-control"
                onChange={(e) => {
                  setUser(e.target.value);
                }}
              />
              {nameError ? <div id="error">please add Username</div> : null}
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-block mb-4"
              placeholder="Username"
              onClick={() => {
                login();
              }}
            >
              Sign in
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default List;
