const { Client, Intents } = require('discord.js');
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

// Replace this with your bot's token, for now it will be hardcoded, but we will use GitHub Secrets later.
const TOKEN = process.env.DISCORD_TOKEN; // Using environment variable for security

client.once('ready', () => {
    console.log('Bot is online!');
});

client.on('messageCreate', message => {
    if (message.content === '!ping') {
        message.channel.send('Pong!');
    }
});

client.login(TOKEN);
