const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "ping",
  description: "Muestra el ping del bot",

  run: async (client, message, args) => {
    const embed = new EmbedBuilder()
      .setThumbnail(client.user.displayAvatarURL())
      .setFields({
        name: "🏓 Pong!",
        value: `📡 Latencia del API: ${
          client.ws.ping
        }ms\n💻 Latencia del Bot: ${Date.now() - message.createdTimestamp}ms`,
      })
      .setColor("Random")
      .setTimestamp();
    message.reply({ embeds: [embed] });
  },
};
