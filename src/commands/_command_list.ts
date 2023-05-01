import { Command } from '../interfaces/discordCommand';

import { roll } from './roll';
import { forcewipe } from './forcewipe';
import { tracker } from './tracker';
import { trackplayer } from './track_player';

const CommandsList: Command[] = [
    roll,
    forcewipe,
    tracker,
    trackplayer,
]

interface Commands {
    [name: string]: Command
}

const commands: Commands = {};

for (const command of CommandsList) {
    commands[command.data.name] = command;
}

export default commands;
