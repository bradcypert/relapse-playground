import React from "react";
import { useReactiveState } from "../Relapse";

export const UserInfo = () => {
  const [loggedIn, loggedInSubscription] = useReactiveState(
    "userViewModel",
    "isLoggedIn"
  );
  return <div>{loggedIn ? "Youre logged in." : "You're anonymous 👺"}</div>;
};
