const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});

const config = require('./config.json');

const chalk = require('chalk');

const fs = require('fs');

client.commands = new Discord.Collection();

client.on('message', async (msg) => {
    if(msg.author.bot) return;
    if(!msg.content.startsWith(config.PREFIX)) return;
    if(msg.content.indexOf(config.PREFIX) != 0) return;
    if(msg.channel.type == 'dm') return;

    const args = msg.content.slice(config.PREFIX.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, msg, args, config);
});



fs.readdir('./commands/', (err, files) => {
    if(err) throw err;

    let file = files.filter(f => f.endsWith('.js'));
    if(file.length <= 0) return console.log('Error JS Files inside the command folder');

    file.forEach((f) => {
        let props = require(`./commands/${f}`);
        console.log(chalk.yellow(`Attempting to load the file: ${f}`));

        client.commands.set(props.help.name, props);
    });
    console.log(chalk.bold.bgGreen('Ready and set to go!'));
});

process.on('unhandledRejection', error => {
    console.error('Unhandled promise rejection:', error);
});

client.on('error', () => console.error);

client.on('warn', () => console.warn);


client.login(config.TOKEN);