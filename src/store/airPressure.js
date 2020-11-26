import EventEmitter from "events";
import {storeCreator} from "../helpers/storeCreator";

const airPressure = new EventEmitter();

const subject = storeCreator(airPressure, "airPressure");

export default subject;