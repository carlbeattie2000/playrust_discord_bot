import { ChatCommand } from "../interfaces/rustplus";

export const pop: ChatCommand = {
    command: '!pop',
    onRun: (rustPlus, _, cb) => {
        rustPlus.getInfo(cb)
    },
    onMessage: (rustPlus, message) => {
        if (message.response && message.response.info) {
            const onlinePlayers = message.response.info.players;
            const maxPlayers = message.response.info.maxPlayers;
            const queuedPlayers = message.response.info.queuedPlayers;

            const replyMessage = `Players Online: (${onlinePlayers}/${maxPlayers}) Queued: ${queuedPlayers}`;

            rustPlus.sendTeamMessage(replyMessage);
        }
    }
}
