require('dotenv').config({ debug: process.env.DEBUG })
const Discord = require("discord.js")
const fs = require("fs")
const client = new Discord.Client()

fs.readdir("./eventos/", (err, files) => {
	files.forEach(file => {
    	const eventHandler = require(`./eventos/${file}`)
    	const eventName = file.split(".")[0]
    	console.log(files)
    	client.on(eventName, (...args) => eventHandler(client, ...args))
  	})
})

client.login(process.env.BOT_TOKEN)
