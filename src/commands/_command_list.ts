import { Command, Commands } from '../interfaces/discordCommand';

import { roll } from './roll';
import { forcewipe } from './forcewipe';
import { tracker } from './tracker';
import { trackplayer } from './track_player';
import { rustauth, stoprustauth } from './rust_plus_auth';
import { config, stop_config } from './config';

const CommandsList: Command[] = [
    roll,
    forcewipe,
    tracker,
    trackplayer,
    rustauth,
    stoprustauth,
    config,
    stop_config
]

const commands: Commands = Object.assign({}, ...CommandsList.map(command => ({ [command.data.name]: command })));

export default commands;
