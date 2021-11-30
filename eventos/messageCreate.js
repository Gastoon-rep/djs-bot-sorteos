const Discord = require('discord.js');
let prefix = '!';

module.exports = {
  name: "messageCreate",
  emiter: "on",
  run: async (client, message) => {

  if (message.author.bot || message.channel.type === 'dm') return;

if(!message.content.startsWith(prefix)) return;

const args = message.content.slice(prefix.length).trim().split(/ +/g);  
const command = args.shift().toLowerCase();
let cmd = client.comandos.get(command) || client.comandos.find((c) => c.alias.includes(command));

if(!cmd) return;

cmd.run(client, message, args)

 }
  
}
