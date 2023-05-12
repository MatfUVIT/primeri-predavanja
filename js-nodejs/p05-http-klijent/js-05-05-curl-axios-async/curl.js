const axios = require('axios');
const adresa = 'https://www.b92.net/';

async function fetchSite(adresa) {
	const odgovor = await axios.get(adresa);
	console.log(odgovor);
}

fetchSite(adresa);