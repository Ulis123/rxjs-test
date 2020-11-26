import EventEmitter from "events";
import {storeCreator} from "../helpers/storeCreator";

const temperature = new EventEmitter();

export default storeCreator(temperature, "temperature");