
async function fetchSite(adresa) {
	try {
		let response = await fetch(adresa);
		console.log(response.status); // 200
		console.log(response.statusText); // OK
		if (response.status === 200) {
			let data = await response.text();
			console.log(data);
		}
	} catch (error) {
		console.log(error);
	}
}

const adresa = 'https://www.b92.net/';

fetchSite(adresa);

