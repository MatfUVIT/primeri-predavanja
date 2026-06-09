const axios = require('axios');

const adresa = 'https://www.b92.net/';

axios.get(adresa) 
	.then(({ data }) => console.log(data));