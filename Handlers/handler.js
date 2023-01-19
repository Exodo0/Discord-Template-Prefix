const fs = require("fs");
const ascii = require("ascii-table");
let table = new ascii("Lista de Comandos");
table.setHeading("Commando", "Estado", "Categoria");

module.exports = (client) => {
  fs.readdirSync("./Commands/").forEach((dir) => {
    const commands = fs
      .readdirSync(`./Commands/${dir}/`)
      .filter((file) => file.endsWith(".js"));

    for (let files of commands) {
      let get = require(`../Commands/${dir}/${files}`);

      if (get.name) {
        client.commands.set(get.name, get);
        table.addRow(files, "🔹 Listo");
      } else {
        table.addRow(files, "❌ Error");
        continue;
      }
      if (get.aliases && Array.isArray(get.aliases))
        get.aliases.forEach((alias) => client.aliases.set(alias, get.name));
    }
  });
  console.log(table.toString());

  //Eventos
  fs.readdirSync("./events/").forEach((file) => {
    const events = fs
      .readdirSync("./events/")
      .filter((files) => files.endsWith(".js"));

    for (let files of events) {
      let get = require(`../events/${files}`);

      if (get.name) {
        client.events.set(get.name, get);
      } else {
        continue;
      }
    }
  });
};
