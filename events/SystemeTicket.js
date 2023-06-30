const {Permissions, MessageEmbed, MessageActionRow, MessageSelectMenu }=require('discord.js')
module.exports = {
    name: 'interactionCreate',
    async execute(client, interaction) {
        if (!interaction.isSelectMenu()) return;
        
	const row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                    .setCustomId('del')
                    .setPlaceholder('Selecione para deletar o ticket!')
					.addOptions([
						{
							label: '🗑️ Excluir Ticket',
							value: 'excluir',
						}
					])
                );
                
                
        let catégorie = "1121175813790912532" // Categoria onde será criado o ticket
        let roleStaff = interaction.guild.roles.cache.get('1121176443049750632') // Cargo que respondera o ticket

        let DejaUnChannel = interaction.guild.channels.cache.find(c => c.topic == interaction.user.id)
        
        if(interaction.customId === "del") {
            if (interaction.values[0] == "excluir") {
                const channel = interaction.channel
                channel.delete();
            }
        }

        if (interaction.customId == "select") {
            if (DejaUnChannel) return interaction.reply({content: '❌ Você já tem um ticket aberto no servidor.', ephemeral: true})
            if (interaction.values[0] == "doacao") {
                interaction.guild.channels.create(`💸・Doação ${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const partenariat = new MessageEmbed()
                    .setTitle('Doação | LeoSzinTV Community') // Nome do seu servidor
                    .setDescription('O que você deseja doar para nossa comunidade ?')
                    .setFooter('')
                    c.send({embeds: [partenariat], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `✅ Seu ticket foi aberto com sucesso. <#${c.id}>`, ephemeral: true})
                })
                
            } else if (interaction.values[0] == "suporte") {
                interaction.guild.channels.create(`📞・Suporte ${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },                    
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const plainte = new MessageEmbed()
                    .setTitle('Suporte | LeoSzinTV Community') // Nome do seu servidor 
                    .setDescription('Por favor, fale seu problema para que o suporte possa te ajudar ')
                    .setFooter('')
                    c.send({embeds: [plainte], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `✅ Seu ticket foi aberto com sucesso. <#${c.id}>`, ephemeral: true})
                })
            } else if (interaction.values[0] == "sugestoes") {
                interaction.guild.channels.create(`🎯・Sugestões ${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const embed = new MessageEmbed()
                    .setTitle('Sugestões | LeoSzinTV Community') // Nome do seu servidor
                    .setDescription('Por favor, fale qual a sua sugetão de melhorias para a Comunidade!.')
                    .setFooter('')
                    c.send({embeds: [embed], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `✅ Seu ticket foi aberto com sucesso. <#${c.id}>`, ephemeral: true})
                })
            } else if (interaction.values[0] == "bugs") {
                interaction.guild.channels.create(`🐛・Bug de ${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const embed = new MessageEmbed()
                    .setTitle('Bugs | LeoSzinTV Community') // Nome do seu servidor
                    .setDescription('Por favor, fale o seu bug para o suporte te ajudar.')
                    .setFooter('')
                    c.send({embeds: [embed], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `✅ Seu ticket foi aberto com sucesso. <#${c.id}>`, ephemeral: true})
                })
            } else if (interaction.values[0] == "denuncia") {
                interaction.guild.channels.create(`🚨・Denúncia de ${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const embed = new MessageEmbed()
                    .setTitle('Denúncia | LeoSzinTV Community') // Nome do seu servidor
                    .setDescription('Por favor, fale o ocorrido, mande id do membro ou staff, foto ou video com provas.')
                    .setFooter('')
                    c.send({embeds: [embed], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `✅ Seu ticket foi aberto com sucesso. <#${c.id}>`, ephemeral: true})
                })
                           
                
            
            }
        }
    }
}