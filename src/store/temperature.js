import { BehaviorSubject } from "rxjs";
import {recursiveChangeData} from "../helpers/recursiveChangeData";
import EventEmitter from "events";

let initialState = {
  data: 0,
  error: "",
};

const temperature = new EventEmitter();

recursiveChangeData(temperature, "temperature");

const subject = new BehaviorSubject(initialState);

temperature.on("temperature", (state) => {
  subject.next(state);
})

export default subject;