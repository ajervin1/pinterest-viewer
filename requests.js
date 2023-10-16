import axios from 'axios';
axios.defaults.baseURL = "https://www.pinterest.com/resource/PinResource/get/"
/*
* term - query string to search for
* filter - either (pins, videos)
* */
async function searchPins( term, filter = 'pins' ) {
	const url = "https://www.pinterest.com/resource/BaseSearchResource/get/"
	const source_url = `/search/pins/?q=${term}&rs=typed`
	const data = {"options":{"article":"","appliedProductFilters":"---","price_max":null,"price_min":null,"query":term,"scope": filter,"auto_correction_disabled":"","top_pin_id":"","filters":""},"context":{}}
	const res = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3Dsadie%20crowell%26rs%3Dtyped&data=%7B%22options%22%3A%7B%22article%22%3A%22%22,%22appliedProductFilters%22%3A%22---%22,%22price_max%22%3Anull,%22price_min%22%3Anull,%22query%22%3A%22${term}%22,%22scope%22%3A%22${filter}%22,%22auto_correction_disabled%22%3A%22%22,%22top_pin_id%22%3A%22%22,%22filters%22%3A%22%22%7D,%22context%22%3A%7B%7D%7D`)
	const pins = res.data.resource_response.data.result;
	console.log(pins)
	/* Filter here */
	/* If videos is in it treat as video */
	/* Check for story_pin_data */
	/* story_pin_data */
	/*  */
}

async function getSingleItem( id = "939704278473986829" ) {
	const url = `https://www.pinterest.com/resource/PinResource/get/?source_url=%2Fpin%2F${id}%2F&data=%7B%22options%22%3A%7B%22id%22%3A%22${id}%22,%22field_set_key%22%3A%22auth_web_main_pin%22,%22noCache%22%3Atrue,%22fetch_visual_search_objects%22%3Atrue%7D,%22context%22%3A%7B%7D%7D`
	const {data} = await axios.get(url);

	console.log(data.resource_response.data);
}

getSingleItem("187603140720602618")

// await fetch("https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3Dsadie%20crowell%26rs%3Dtyped&data={%22options%22%3A{%22article%22%3A%22%22,%22appliedProductFilters%22%3A%22---%22,%22price_max%22%3Anull,%22price_min%22%3Anull,%22query%22%3A%22sadie%20crowell%22,%22scope%22%3A%22pins%22,%22auto_correction_disabled%22%3A%22%22,%22top_pin_id%22%3A%22%22,%22filters%22%3A%22%22},%22context%22%3A{}}", {
// 	"credentials": "include",
// 	"headers": {
// 		"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/119.0",
// 		"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
// 		"Accept-Language": "en-US,en;q=0.5",
// 		"Upgrade-Insecure-Requests": "1",
// 		"Sec-Fetch-Dest": "document",
// 		"Sec-Fetch-Mode": "navigate",
// 		"Sec-Fetch-Site": "none",
// 		"Sec-Fetch-User": "?1"
// 	},
// 	"method": "GET",
// 	"mode": "cors"
// });