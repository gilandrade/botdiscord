require('dotenv').config()
const Discord = require("discord.js")
const fs = require("fs")
const bot = new Discord.Client()

//const giphy = GphApiClient(process.env.GIPHY_TOKEN)

fs.readdir("./eventos/", (err, files) => {
	files.forEach(file => {
    	const eventHandler = require(`./eventos/${file}`)
    	const eventName = file.split(".")[0]
    	bot.on(eventName, (...args) => eventHandler(bot, ...args))
  	})
})

bot.login(process.env.BOT_TOKEN)
