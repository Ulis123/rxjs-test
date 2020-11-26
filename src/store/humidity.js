import EventEmitter from "events";
import {storeCreator} from "../helpers/storeCreator";

const humidity = new EventEmitter();

export default storeCreator(humidity, "humidity");