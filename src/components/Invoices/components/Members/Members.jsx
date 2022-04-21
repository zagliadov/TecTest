import React, { useEffect, useContext, useState, Suspense } from "react";
import { asyncDispatch } from "../../../../state/asyncDispatch";
import { AppContext } from "../../../../state/AppContext";
import { ActionType } from "../../../../state/actions";
import { getUsers } from "../../../../state/controllers/usersController";
import { UserInfoSceleton } from "./components/UserInfoSceleton";
const UserInfo = React.lazy(() => import("./components/UserInfo"));

export const Members = () => {
  const [{ isTrue, id }, setGetInfo] = useState({
    isTrue: false,
    id: null,
  });
  const [{ users }, dispatch] = useContext(AppContext);

  useEffect(() => {
    asyncDispatch(dispatch, ActionType.GET_USERS, getUsers());
  }, [dispatch]);

  return (
    <>
      <h2 className="pb-5 pt-2">Members list: </h2>
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

            {isTrue && id === user.id ? (
              <Suspense fallback={<UserInfoSceleton /> } >
                <UserInfo user={user} />
              </Suspense>
            ) : null}
          </div>
        );
      })}
    </>
  );
};
