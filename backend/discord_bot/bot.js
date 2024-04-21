const { Client, GatewayIntentBits } = require("discord.js");
const colors = require("colors");
const dotenv = require("dotenv");
dotenv.config();

module.exports = function initBot() {
  const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
    ],
  });

  client.on("ready", () => {
    console.log("Bot is running.".cyan.underline);
  });

  client.on("messageCreate", (message) => {
    if (message.author.bot) return;

    if (message.content.startsWith(";search_blogs ")) {
      const queryText = message.content.split(";search_blogs ")[1];

      return message.reply({
        content: "got query for" + queryText,
      });
    }
  });

  client.login(process.env.TOKEN);
};
