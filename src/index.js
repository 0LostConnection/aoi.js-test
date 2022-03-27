const aoijs = require('aoi.js');

const bot = new aoijs.Bot({
    token: `${process.env.DEV_TOKEN}`,
    intents: ["guilds", "guildMessages"],
    prefix: "!"
})

bot.onMessage()

bot.command({
    name: "ping", //command name
    code: `My Ping Is \`$ping ms\` ` //code to be executed when this command is called 
});
