import React, { Suspense, useContext, useEffect } from "react";
import { asyncDispatch } from "../../../../state/asyncDispatch";
import { AppContext } from "../../../../state/AppContext";
import { ActionType } from "../../../../state/actions";
import { getUsers } from "../../../../state/controllers/usersController";
import { MemberItemSceleton } from "./components/MemberItemSceleton";
const MemberItem = React.lazy(() =>
  import("./components/MemberItem/MemberItem")
);

export const Members = () => {
  const [{ users = [] }, dispatch] = useContext(AppContext);

  useEffect(() => {
    asyncDispatch(dispatch, ActionType.GET_USERS, getUsers());
  }, [dispatch]);

  if (!users.length) return null;
  return (
    <>
      <h2 className="pb-5 pt-2">Members list: </h2>
      <Suspense fallback={<MemberItemSceleton users={users} />}>
        <MemberItem users={users} />
      </Suspense>
    </>
  );
};
