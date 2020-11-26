import {recursiveChangeData} from "./recursiveChangeData";
import {BehaviorSubject} from "rxjs";


export const storeCreator = (system, systemName) => {
  let initialState = {
    data: null,
    error: "",
  };

  recursiveChangeData(system, systemName);

  const subject = new BehaviorSubject(initialState);

  system.on(systemName, (state) => {
    subject.next(state);
  })

  return subject;
}


