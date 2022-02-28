import React from "react";

const SideNave = ({ connected }) => {
  return (
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
                <div
                  className="circle"
                  id={user.connected ? "online" : "offline"}
                ></div>
                Online
              </div>
              <hr id="hr"></hr>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SideNave;
