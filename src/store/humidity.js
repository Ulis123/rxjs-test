import { BehaviorSubject } from "rxjs";
import {recursiveChangeData} from "../helpers/recursiveChangeData";
import EventEmitter from "events";

let initialState = {
  system: "humidity",
  data: 0,
  error: "",
};

const humidity = new EventEmitter();

recursiveChangeData(humidity, "humidity");

const subject = new BehaviorSubject(initialState);

humidity.on('humidity', (state) => {
  subject.next(state);
})

export default subject;