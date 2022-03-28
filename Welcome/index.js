// File: index.js
// Author: srietz
// Description: General Discord Bot

// Discord Requires
const {	
	Client, 
	Intents,
		} = require('discord.js');

// Global Variables 

const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS]});
const prefix = '?';
const me = 'crash#8350';

client.once('ready', () =>{
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {
    if(!msg.content.startsWith(prefix) || msg.author.bot) return false;
    const args = msg.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        msg.channel.send('pong!');
    }

    

});

client.login('OTUzMTQ2NTQ2Mzk0ODkwMjYw.YjAU5Q.jcSyoJ7_HPLhWk7Q11Nb7KyYA28');
