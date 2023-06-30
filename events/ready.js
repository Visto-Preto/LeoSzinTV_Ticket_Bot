module.exports = {
    name: 'ready',
    once: true,

    async execute(client) {

        console.log(`LeoSzinTV V1.5`)




    let green = '\x1b[32m',
    colorful = (color, string, reset = '\x1b[0m') => color + string + reset
    console.log(colorful(green, 
        
`✅ - [BOT] online!|${client.user.username}    
                      
✔ Discord: https://discord.gg/XAxE7WtB `))   




        var compteurStatus = 1
        setInterval(async () => {
            status =  [`SUPORTE ON ✔`]
            compteurStatus = (compteurStatus + 1) % (status.length);
            client.user.setPresence({
                activities: [{
                    name: `${status[compteurStatus]}`,
                    type: "STREAMING",
                    url: "https://www.youtube.com/channel/UCVHx4r_JEUZVDwdYDjMPdgQ"
                }],
                  status: "streaming"})
        }, 5000);
    }
}
