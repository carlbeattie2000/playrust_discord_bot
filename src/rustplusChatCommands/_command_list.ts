import { ChatCommand } from "../interfaces/rustplus";
import { pop } from "./pop";
import { time } from "./time";

const chatCommands: ChatCommand[] = [
    pop,
    time
];

export default chatCommands;
