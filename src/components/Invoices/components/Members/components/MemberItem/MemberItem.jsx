import React, { useState } from "react";
import { MemberInfo } from "../MemberInfo/MemberInfo";

export default function MemberItem({ users = [] }) {
  const [{ isTrue, id }, setGetInfo] = useState({
    isTrue: false,
    id: null,
  });

  if (!users.length) return null;
  return (
    <>
      {users.map((user) => {
        return (
          <div key={user.id} className="flex flex-col">
            <div className="flex justify-between">
              <p>{user.name}</p>
              <button
                onClick={() => setGetInfo({ isTrue: !isTrue, id: user.id })}
              >
                {isTrue && id === user.id ? "x" : isTrue ? null : "info"}
              </button>
            </div>

            {isTrue && id === user.id ? <MemberInfo user={user} /> : null}
          </div>
        );
      })}
    </>
  );
}
