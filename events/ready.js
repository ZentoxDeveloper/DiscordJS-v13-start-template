module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
        client.user.setActivity('TV', { type: 'WATCHING' })
	},
};

/**
 * @INFO
 * This bot is coded by @Mr. Dragon#4025 | https://discord.gg/VjyejfwPcm
 * @INFO
 * Work for ZentoxDevelopment | https://development.zentox.net
 * @INFO
 */
