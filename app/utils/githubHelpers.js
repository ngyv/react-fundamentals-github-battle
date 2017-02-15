var axios = require('axios');

var id = 'YOUR_CLIENT_ID';
var secret = 'YOUR_SECRET_ID';
var param = '?client_id=' + id + '&client_secret=' + secret;


function gerUserInfo (username) {
	return axios.get('https://api.github.com/users/' + username + param)
}

var helpers = {
	getPlayersInfo: function (playersUsernames) {
		return axios.all(playersUsernames.map(function(username){

			return gerUserInfo(username) //also a promise

		})).then(function (info) {
			return info.map(function(user){
				return user.data;
			})

		}).catch(function (err) {
			console.warn('Error in getPlayersInfo', err)
		})
	}
}

module.exports = helpers;