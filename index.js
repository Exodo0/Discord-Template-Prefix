console.clear();
const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
} = require("discord.js");
const {
  Guilds,
  GuildMembers,
  GuildMessages,
  GuildPresences,
  GuildVoiceStates,
  MessageContent,
} = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;
const client = new Client({
  intents: [
    Guilds,
    GuildPresences,
    GuildMembers,
    GuildMessages,
    GuildVoiceStates,
    MessageContent,
  ],
  partials: [User, Message, GuildMember, ThreadMember],
});
const { readdirSync } = require("fs");
const { config } = require("./config.json");
const { Token } = require("./config.json");

//Lo de Arriba consta en dependencias que necesitara el bot para poder funcionar

//Lo de Abajo es para que el bot pueda leer los comandos y los aliases de los comandos

client.commands = new Collection();
client.aliases = new Collection();
client.categories = readdirSync("./Commands/");

//Handler

module.exports = client;
["handler"].forEach((handler) => {
  require(`./Handlers/${handler}`)(client);
});

client.login(Token);
