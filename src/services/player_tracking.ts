import ws from 'ws';

// [WARNING]: This is currently being devloped in a manner that will prevent multiple people using the bot.
// [PLAN]: Store data based on GuildID, so multiple people can use the BOT.

// Should be able to either track players on the server currently paried too, a server by id and should keep tracking even if unpaired from the server
// Add a command, /players_cleartracking to remove all players from tracking list.
// Max tracking limit of 50-100 as players tracking information is all being stored in memory.
// [PLANNED]: Players being tracked to be stored in database incase of server restart.

const players_tracking = [];
