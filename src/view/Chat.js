import React, { useState, useEffect } from "react";
import SideNave from "../components/SideNav";
import MessagesBody from "../components/MessagesBody";
import Disconnect from "../components/Disconnect";
import Form from "../components/Form";
import { get, scrollDown } from "../helpers/helpers.js";

const Chat = ({
  name,
  userImage,
  connected,
  setconnected,
  setloged,
  list,
  setlist,
}) => {
  var [msg, setmsg] = useState("");
  var [numberOfMessages, setnumberOfMessages] = useState(25);

  useEffect(() => {
    // scroll down whenever a message is sended
    scrollDown();
  }, [list]);

  // event listner on messages and check the connected users
  setInterval(() => {
    setlist(get("listOfMessages").reverse().slice(0, numberOfMessages));
    setconnected(get("connected"));
  }, 1000);

  return (
    <main className="content">
      <div className="container p-2">
        <Disconnect name={name} setloged={setloged} />
        <div className="card" id="darker">
          <div className="row g-0">
            <div className="col-12 col-lg-5 col-xl-3 border-right">
              <div className="px-4 d-none d-md-block">
                <div className="d-flex align-items-center"></div>
              </div>
              <SideNave connected={connected} />
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
              <MessagesBody
                numberOfMessages={numberOfMessages}
                list={list}
                setnumberOfMessages={setnumberOfMessages}
                name={name}
              />
              <Form
                msg={msg}
                setlist={setlist}
                setmsg={setmsg}
                userImage={userImage}
                name={name}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Chat;
