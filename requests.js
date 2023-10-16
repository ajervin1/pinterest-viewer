import axios from 'axios';
import { defineComponent } from "vue";
import CardList from "./src/components/CardList.vue";
import NavBar from "./src/components/NavBar.vue";

export default defineComponent({
	components: { NavBar, CardList }
})

axios.defaults.baseURL = "https://www.pinterest.com/resource/PinResource/get/"
/*
* term - query string to search for
* filter - either (pins, videos)
* */
export async function searchPins( term, filter = 'pins' ) {
	const url = "https://www.pinterest.com/resource/BaseSearchResource/get/"
	const source_url = `/search/pins/?q=${term}&rs=typed`
	const data = {"options":{"article":"","appliedProductFilters":"---","price_max":null,"price_min":null,"query":term,"scope": filter,"auto_correction_disabled":"","top_pin_id":"","filters":""},"context":{}}
	const res = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3Dsadie%20crowell%26rs%3Dtyped&data=%7B%22options%22%3A%7B%22article%22%3A%22%22,%22appliedProductFilters%22%3A%22---%22,%22price_max%22%3Anull,%22price_min%22%3Anull,%22query%22%3A%22${term}%22,%22scope%22%3A%22${filter}%22,%22auto_correction_disabled%22%3A%22%22,%22top_pin_id%22%3A%22%22,%22filters%22%3A%22%22%7D,%22context%22%3A%7B%7D%7D`, {
		withCredentials: false,
	})
	const pins = res.data.resource_response.data.results;
	return pins;
	/* Filter here */
	/* If videos is in it treat as video */
	/* Check for story_pin_data */
	/* story_pin_data */
	/*  */
}

export async function getSingleItem( id = "939704278473986829" ) {
	const url = `https://www.pinterest.com/resource/PinResource/get/?source_url=%2Fpin%2F${id}%2F&data=%7B%22options%22%3A%7B%22id%22%3A%22${id}%22,%22field_set_key%22%3A%22auth_web_main_pin%22,%22noCache%22%3Atrue,%22fetch_visual_search_objects%22%3Atrue%7D,%22context%22%3A%7B%7D%7D`
	const {data} = await axios.get(url);


	return data.resource_response.data
}

