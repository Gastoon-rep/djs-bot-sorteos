const Discord = require("discord.js");
const { readdirSync } = require("fs");
const client = new Discord.Client({
    intents: 32767,
});

client.on('ready', () => {
   console.log(`¡Estoy listo!`);
});

client.comandos = new Discord.Collection()
// Comandos
for (const subFolder of readdirSync(`${__dirname}/comandos/`)) {
    for (const fileName of readdirSync(`${__dirname}/comandos/${subFolder}/`)) {
        let file = require(`${__dirname}/comandos/${subFolder}/${fileName}`);
       client.comandos.set(file.name, file);
    }
}

// Eventos
for (const fileName of readdirSync(`${__dirname}/eventos/`)) {
    let file = require(`${__dirname}/eventos/${fileName}`);
    let eventEmiter = file.emiter;

    client[eventEmiter](file.name, file.run.bind(null, client));
}

const { GiveawaysManager } = require('discord-giveaways');
client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    default: {
     botsCanWin: false,
     embedColor: "#FF0000",
     reaction: "🎁", /* Aquí pones el emoji (puedes cutomisarlo. */
     lastChance: {
        enabled: true,
        content: 'Todavia puedes reaccionar!',
        threshold: 5000,
        embedColor: '#FF0000'
     }
   }
});

client.login('tu token');
