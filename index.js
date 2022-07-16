const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({'intents': ["GUILDS", "GUILD_MESSAGES"]});
const prefix = '.'

client.on('message', message => {
    if(message.content.startsWith(`${prefix}ping`)) {
        message.reply("> Pong!");
    };
});

client.login(require('./token.json').token);