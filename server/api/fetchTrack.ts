// const apiKey = 'YOUR_TASTEDIVE_API_KEY';
// const baseUrl = 'https://tastedive.com/api/similar';

// // Function to fetch data from TasteDive API
// async function fetchFromTasteDive(query) {
// 	const url = `${baseUrl}?k=${apiKey}&q=${encodeURIComponent(query)}`;

// 	try {
// 		const response = await fetch(url);
// 		const data = await response.json();

// 		console.log(data);

// 		return data;
// 	} catch (error) {
// 		console.log('Error:', error);

// 		throw error;
// 	}
// }

// fetchFromTasteDive('Inception')
// 	.then(data => {

// 		console.log(data);
// 	})
// 	.catch(error => {

// 		console.log(error);
// 	});
