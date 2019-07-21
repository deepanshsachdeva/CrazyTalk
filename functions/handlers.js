const axios = require('axios');
const entities = require('./entities');

module.exports = {
	
	makeName: (app) => {
		app.tell('Me too. High Five!');
	},

	exploreCareers: (app) => {
		let career = app.getArgument(entities.CAREER);
		app.tell(`Sure! I will help you provide career options for ${career}`);
	},
	
	bitcoinPrice:  (app) => {
		axios.get('https://blockchain.info/ticker')
			.then((response) => {
				let prices = response.data;
				app.data.prices = prices;
				app.ask(`Currently, bitcoin price is ${prices.USD.last} USD per bitcoin`);
			})
			.catch((error) => {
				app.tell('Oops! Something went wrong. Try again later.');
			});
	},

	bitcoinConvertPrice: (app) => {
		const { prices } = app.data;

		app.tell(`Currently, bitcoin price is ${prices.INR.last} indian rupees per bitcoin`);
	},
}