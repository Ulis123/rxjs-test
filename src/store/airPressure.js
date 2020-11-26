import EventEmitter from "events";
import {storeCreator} from "../helpers/storeCreator";

const airPressure = new EventEmitter();

export default storeCreator(airPressure, "airPressure");