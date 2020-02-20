import React from "react";
import { useViewModel } from "../Relapse";

export const LogoutButton = () => {
  const userVm = useViewModel("userViewModel");
  return (
    <button onClick={e => userVm.isLoggedIn.next(false)}>Log me out</button>
  );
};
