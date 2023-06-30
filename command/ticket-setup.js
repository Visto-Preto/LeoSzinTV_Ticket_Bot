const {MessageActionRow, MessageSelectMenu} = require('discord.js')
module.exports = {
    name: 'ticket',
    usage: 'template',
    category: "mod",
    description: `Commande template.`,
    async execute(client, message, args) {
		message.delete()
        const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Selecione uma opção...')
					.addOptions([
						{
							label: 'Doação para a Comunidade',
							emoji: '🎁',
							value: 'doacao',
						},
						{
							label: 'Falar com o suporte',
							emoji: '🛡️',
							value: 'suporte',
						},
						{
							label: 'Fazer uma denúncia',
							emoji: '🚨',
							value: 'denuncia',
						},
						{
							label: 'Reportar Bug',
							emoji: '🐛',
							value: 'bugs',
						},
						{
							label: 'Sugestões',
							emoji: '🎯',
							value: 'sugestoes',
						},

					]),
			);

        message.channel.send({
            embeds: [{
                title: 'LeoSzinTV Community', //Nome do seu servidor
                description: '> Está precisando de ajuda relacionada a nossa Comunidade? abra um ticket! assim poderemos te ajudar!', //Texto da sua preferência
                color: "FF0000", //Pesquise no navegador uma cor de sua preferência em HEX
				image: {url: 'https://media.discordapp.net/attachments/1120403497591001138/1120410957764636702/community.jpg'}, 
				footer: {text: '© LeoSzinTV Community - Todos os direitos reservados'} //Nome da sua preferência
            }],
            components: [row]            
        })
    }
}