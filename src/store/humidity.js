import EventEmitter from "events";
import {storeCreator} from "../helpers/storeCreator";

const humidity = new EventEmitter();

const subject = storeCreator(humidity, "humidity");

export default subject;