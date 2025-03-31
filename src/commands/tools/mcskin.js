const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {

    const name = interaction.options.getString('name');

    if (name == null) return client.errUsage({ usage: "mcskin [player name]",type: 'editreply' }, interaction)

    client.embed({
        title: `🎮・Skin of ${name}`,
        image: `https://starlightskins.lunareclipse.studio/render/walking/${name}/full`,
        type: 'editreply'
    }, interaction)

}

 