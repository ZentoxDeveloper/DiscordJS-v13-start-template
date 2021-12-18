const fs = require('fs');
const { Client, Intents, Collection } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const config = require('dotenv').config();

client.commands = new Collection();

const commandFiles = fs.readdirSync('./slashCommands').filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
   const command = require (`./slashCommands/${file}`);
   client.commands.set(command.data.name, command);
}

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName)

  if(!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.log(error);
    await interaction.reply({
      content: "An error was occurred while executing the command!",
      ephemeral: true
    });
  }
  
});

client.login(process.env.BOT_TOKEN);