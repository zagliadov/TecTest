import React from "react";

export const MemberInfo = ({ user }) => {
  return (
    <div className="py-2 px-2 border-b-2">
      <p>{user.email}</p>
    </div>
  );
}
