const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args, con) => {

    let embed = new MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setColor(client.config.colorhex)
    .setDescription(`🏓 Latency is: **${Date.now() - message.createdTimestamp}ms.**`)
    message.channel.send({ embeds: [embed] }).then((msg) => {
        if(client.config.deleteCommands) {
            setTimeout(() => {
                msg.delete().catch(e => {});
            }, 14000);
        }
    }).catch(e => {});

}

exports.info = {
    name: "ping",
    description: "See if im alive!",
    aliases: ['bing']
}

/**
 * @INFO
 * This bot is coded by @Mr. Dragon#4025 | https://discord.gg/VjyejfwPcm
 * @INFO
 * Work for ZentoxDevelopment | https://development.zentox.net
 * @INFO
 */
