const client = require("../index");
client.on("ready", () => {
  console.log(`Bot iniciado: ${client.user.tag}!`);

  // Set status
  client.user.setActivity(
    `Servidores: ${client.guilds.cache.size} | Usuarios: ${client.users.cache.size}`,
    {
      type: "WATCHING",
    }
  );
});
