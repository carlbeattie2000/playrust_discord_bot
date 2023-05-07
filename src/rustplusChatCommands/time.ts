import { ChatCommand } from "../interfaces/rustplus";

export const time: ChatCommand = {
    command: '!time',
    onRun: (rustplus, message, cb) => {
        rustplus.getTime(cb);
    },
    onMessage: (rustplus, message) => {
        if (message.response && message.response.time) {
            const time = message.response.time.time;

            const msg = `Time: ${time}`;

            rustplus.sendTeamMessage(msg);
        }
    }
}
