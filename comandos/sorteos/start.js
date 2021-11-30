const Discord = require('discord.js');
const ms = require('ms');

module.exports = {
    name: "start",
    alias: [],
    run: async (client, message, args) => {
      
  /* Creaditos a la npm discord-giveaways */
  
  if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send('Necesitas permisos.')

  let channel = message.mentions.channels.first();
  if(!channel) return message.channel.send('Menciona un canal.')
  
  if(channel.type === "voice" || channel.type === "category") return message.channel.send("Menciona un canal de texto.");
  
  let giveawayDuration = args[1];
  if(!giveawayDuration || isNaN(ms(giveawayDuration))) return message.channel.send("Pon una duración válida.");
  
    let giveawayNumberWinners = args[2];
    if(isNaN(giveawayNumberWinners) || (parseInt(giveawayNumberWinners) <= 0)) iveawayNumberWinnersel.send('Pon un número de ganadores válido.');
    
  let giveawayPrice = args.slice(3).join(" ");
  if(!giveawayPrice) return message.channel.send("Pon lo que quieras sortear.")
  
  let host = message.author || "(?)";

  client.giveawaysManager.start(channel, {
  duration: ms(giveawayDuration),
  winnerCount: parseInt(giveawayNumberWinners),
  prize: giveawayPrice,
  hostedBy: host,

  messages: {
    giveaway: "¡Nuevo Sorteo!",
    giveawayEnded: "El sorteo ha terminado.",
    drawing: `Tiempo: {timestamp}.`,
    inviteToParticipate: `Reacciona a 🎁 para participar en el sorteo.`,
    winMessage: '{winners}, Sorteo: **{this.prize}**',
    embedFooter: 'Sorteo',
    noWinner: "Nadien ha reaccionado, el sorteo se cancelo.',
    hostedBy: 'Host: **{this.hostedBy}**',
    winners: '¡Ganadores!',
    endedAt: 'Sorteo finalizado.',
  }
})

 message.channel.send(`Sorteo creado en ${channel}.`)
  
 }
};
