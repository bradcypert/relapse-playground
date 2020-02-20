import * as Rx from "rxjs";

export class UserViewModel {
  isLoggedIn = new Rx.BehaviorSubject(false);
}
