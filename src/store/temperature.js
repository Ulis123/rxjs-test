import EventEmitter from "events";
import {storeCreator} from "../helpers/storeCreator";

const temperature = new EventEmitter();

const subject = storeCreator(temperature, "temperature");

export default subject;