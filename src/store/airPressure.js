import { BehaviorSubject } from "rxjs";
import {recursiveChangeData} from "../helpers/recursiveChangeData";
import EventEmitter from "events";

let initialState = {
  data: 0,
  error: "",
};

const airPressure = new EventEmitter();

recursiveChangeData(airPressure, "airPressure");

const subject = new BehaviorSubject(initialState);

airPressure.on("airPressure", (state) => {
  subject.next(state);
})
export default subject;