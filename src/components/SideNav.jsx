import React from "react";
import UserStatus from "./UserStatus";
const SideNave = ({ connected }) => {
  return (
    <div class="list-group-item list-group-item-action border-0">
      {connected.map((user) => {
        return <UserStatus user={user} />;
      })}
    </div>
  );
};

export default SideNave;
