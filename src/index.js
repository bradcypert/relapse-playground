import React from "react";
import ReactDOM from "react-dom";
import { Relapse } from "./Relapse";
import { LoginButton } from "./components/LoginButton";
import { UserInfo } from "./components/UserInfo";
import { UserViewModel } from "./viewmodels/UserViewModel";
import * as serviceWorker from "./serviceWorker";
import { LogoutButton } from "./components/LogoutButton";

const container = {
  userViewModel: new UserViewModel()
};

const App = () => {
  return Relapse(
    <div className="box">
      <LoginButton />
      <UserInfo />
      <LogoutButton />
    </div>,
    container
  );
};
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
