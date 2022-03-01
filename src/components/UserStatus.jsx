import React from "react";

// user status component
const UserStatus = ({ user }) => {
  return (
    <div class="d-flex align-items-start">
      <img
        src={user.image}
        class="rounded-circle mr-1"
        alt="William Harris"
        width="40"
        height="40"
      />
      <div class="flex">
        <strong>{user.name}</strong>
        <div class="small">
          <div class="circle" id={user.connected ? "online" : "offline"}></div>
          Online
        </div>
        <hr id="hr"></hr>
      </div>
    </div>
  );
};

export default UserStatus;
