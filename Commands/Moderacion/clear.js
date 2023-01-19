const { EmbedBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  name: "clear",
  description: "Borra mensajes del canal",
  permissions: "ManageMessages",
  category: "Moderacion",

  run: async (client, message, args) => {
    if (!message.member.permissions.has(PermissionFlagsBits.ManageMessages))
      return message.reply("No tienes permisos para ejecutar este comando");
    if (!args[0])
      return message.reply(
        "Debes especificar la cantidad de mensajes a borrar"
      );
    if (isNaN(args[0])) return message.reply("Debes especificar un numero");
    if (args[0] > 100)
      return message.reply("No puedes borrar mas de 100 mensajes");
    if (args[0] < 1) return message.reply("Debes borrar al menos 1 mensaje");

    await message.channel
      .bulkDelete(parseInt(args[0]) + 1)
      .catch((err) => console.log(err));

    const embed = new EmbedBuilder()
      .setThumbnail(client.user.displayAvatarURL())
      .setFields({
        name: "🗑️ Mensajes borrados",
        value: `Se han borrado ${args[0]} mensajes del canal ${message.channel}`,
      })
      .setColor("Random")
      .setTimestamp();

    message.channel.send({ embeds: [embed] });
  },
};
