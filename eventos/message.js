module.exports = (client, message) => {
  if (message.content === "Jarvis") {
	message.channel.send("Sim, senhor " + message.member.user.username + ".")
  }
}