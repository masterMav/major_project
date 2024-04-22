const { Client, GatewayIntentBits } = require("discord.js");
const colors = require("colors");
const Blog = require("../models/blog");
const Problem = require("../models/problem");
const Fuse = require("fuse.js");
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

  let allBlogs;
  let allProblems;

  client.on("ready", async () => {
    console.log("Bot is running.".cyan.underline);
    allBlogs = await Blog.find();
    allProblems = await Problem.find();
  });

  client.on("messageCreate", (message) => {
    if (message.author.bot) return;

    if (message.content.startsWith(";search_blogs ")) {
      const queryText = message.content.split(";search_blogs ")[1];

      const fuse = new Fuse(allBlogs, {
        keys: ["title"],
      });

      const searchResult = fuse.search(queryText, { limit: 5 });

      const blogs = [];

      searchResult.forEach((item, index) => {
        blogs.push(`${index + 1}. ${item.item.title.toString()}`);
        blogs.push(`\t Author: ${item.item.authorName.toString()}`);
      });

      const str = blogs.join("\n");

      return message.reply({
        content: str,
      });
    }

    if (message.content.startsWith(";search_problem ")) {
      const queryText = message.content.split(";search_problem ")[1];

      const fuse = new Fuse(allProblems, {
        keys: ["problemCode", "problemName"],
      });

      const searchResult = fuse.search(queryText, { limit: 5 });

      const problems = [];

      searchResult.forEach((item, index) => {
        problems.push(`${index + 1}. ${item.item.problemName.toString()} -`);

        problems.push(
          `\t Rating: ${item.item.problemRating.toString()} \t Code: ${item.item.problemCode.toString()}`
        );
      });

      const str = problems.join("\n");

      return message.reply({
        content: str,
      });
    }
  });

  client.login(process.env.TOKEN);
};
