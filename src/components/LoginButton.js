import React from "react";
import { Relapse, useReactiveState, useViewModel } from "../Relapse";

export const LoginButton = () => {
  const userVm = useViewModel("userViewModel");
  return <button onClick={e => userVm.isLoggedIn.next(true)}>Log me in</button>;
};
