const { EmbedBuilder } = require("discord.js");
//Siempre que quiereas hacer un commando que requerira de permisos, debes poner esto:
//const { EmbedBuilder, PermissionFlagsBits } = require("discord.js"); En caso de que solo quieras que envie un Embed.
//solo pones: const { EmbedBuilder } = require("discord.js");

//Para que el comando funcione, debes poner esto:

module.exports = {
  name: "test", //Nombre del comando debe de ser el mismo que el nombre del archivo.
  description: "test", //Descripcion del comando.
  permissions: "ManageMessages", //Permisos que requiere el comando. (Si no requiere ninguno, no lo pongas)
  category: "Utilidades", //Categoria del comando. (Si no requiere ninguna, no lo pongas)

  run: async (client, message, args) => {
    //Siempre que quieras hacer funcionar un comando, debes poner esto.

    //Aqui va el codigo del comando. depende de lo que quieras hacer.

    const embed = new EmbedBuilder() //Siempre que quieras enviar un Embed, debes poner esto.
      .setThumbnail(client.user.displayAvatarURL()) //Aqui puedes poner la imagen del bot. Si es de un usuario, debes poner: message.author.displayAvatarURL({ dynamic: true })
      //.setImage("") //Puedes agregar una imagen al embed. solo agrega el url de la imagen.
      .setDescription("Hola Esto es una Prueba"); //Aqui puedes poner algun texto .

    await message.channel.send({ embeds: [embed] }); //Aqui puedes poner el embed que acabas de crear. o en su defecto agregar: { content: "Hola" } para que solo envie un texto.

    //Si quieres que el mensaje le haga reply a alguien, debes poner: message.reply({ embeds: [embed] });

    //Recuerda quitar los // de las lineas que quieras usar.
  },
};
