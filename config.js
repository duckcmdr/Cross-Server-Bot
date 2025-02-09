module.exports=
{
    "token": process.env.DISCORD_TOKEN,
    "enhancedMention": {
        "user": true,
        "role": true,
        "channel": true
    },
    "prefix": "c!",
    "messageDelete": true,
    "deleteOnUpdate": true,
    "guilds": [ 
        {
            "name": "SHE",
            "identifier": "SHE",
            "guildID": "696853831476314204",
            "channelID": "879560641386532884",
            "whID": "879630787731927082",
            "whToken": process.env.SHE_WEBHOOK,
            "ignoreAll": false,
            "ignoreBots": true,
            "managerRoles": [708467176935522305]
        },
        {
            "name": "MSG13",
            "identifier": "MSG",
            "guildID": "805300919691509800",
            "channelID": "874857435150557184",
            "whID": "879631029541949450",
            "whToken": process.env.MSG_WEBHOOK,
            "ignoreAll": false,
            "ignoreBots": true,
            "managerRoles": [811279111632322661]
        }
    ]
}
