var GphApiClient = require('giphy-js-sdk-core')
giphy = GphApiClient(process.env.GIPHY_TOKEN)

module.exports = (client, message) => {
  if (message.content === "Jarvis") {
	//message.channel.send("Sim, senhor " + message.member.user.username + ".")
  	message.channel.send("Pode me chamar usando o comando 'j-' se quiser, senhor " + message.member.user.username + ".")
  }
  if (message.content.startsWith("j-")){
  	const args = message.content.trim().split(/ +/g);
  	const cmd = args[0].slice(2).toLowerCase(); // case INsensitive, without prefix
  	
  	if (cmd === 'gif'){
  		giphy.random('gifs', {})
  			.then((res) => {
				const embed = {
					title: 'GIF',
					image: {
					url: res.data.url,
					},
				};
				message.channel.send({ embed: embed });
 			})
  			.catch((err) => {
 				return err;
  			})

  	}
  }
}