const client = require("../index");
const { MONGO_URI } = require("../config.json");
const chalk = require("chalk");
const { connect } = require("mongoose");
client.on("ready", async () => {
  console.log(`Bot iniciado: ${client.user.tag}!`);
  const Activitys = [
    `Estoy en: ${client.guilds.cache.size} servidores 🔥`,
    `Revisando: ${client.channels.cache.size} canales 🔥`,
    `Con: ${client.guilds.cache.reduce(
      (a, g) => a + g.memberCount,
      0
    )} miembros 🔥`,
  ];
  setInterval(() => {
    const index = Math.floor(Math.random() * (Activitys.length - 1) + 1);
    client.user.setActivity(Activitys[index]);
  }, 4500);
  client.user.setStatus("online");

  await connect(MONGO_URI)
    .then(() => console.log(chalk.green("💠 >>> Conectado a la base de datos")))
    .catch((err) =>
      console.log(chalk.red("💠 >>> Error al conectar a la base de datos"))
    );
});
