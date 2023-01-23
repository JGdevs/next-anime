import axios from 'axios';

const instance = axios.create({

  baseURL: 'https://api.jikan.moe/v4',

});

async function getPremiere (page) {

	const url = (page) ? `/seasons/now?page=${page}` : '/seasons/now';

	try {

		const {data} = await instance.get(url);

		return data;

	}

	catch (err) {

		console.log(err);

	}

}

async function getClasics (page) {

	const url =  (page) ? `https://api.jikan.moe/v4/anime?order_by=popularity&start_date=1970&end_date=2005&page=${page}`  : `https://api.jikan.moe/v4/anime?order_by=popularity&start_date=1970&end_date=2005`;

	try {

		const {data} = await instance.get(url);

		return data;

	}

	catch (err) {

		console.log(err);

	}

}

async function getHentai (page) {

	const url = (page) ? `/anime?rating=rx&start_date=2010&end_date=2023&page=${page}` : '/anime?rating=rx&start_date=2010&end_date=2023';

	try {

		const {data} = await instance.get(url);

		return data;

	}

	catch (err) {

		console.log(err);

	}	

}

async function getPopulars (page) {

	const url = (page) ? `/top/anime?page=${page}` : '/top/anime';

	try {

		const {data} = await instance.get(url);

		return data;

	}

	catch (err) {

		console.log(err);

	}	

}

async function getGenres (query = 1,page) {

	const url = (page) ? `/anime?${query}&page=${page}` : `/anime?${query}` 

	try {

		const {data} = await instance.get(url);

		return data;

	}

	catch (err) {

		console.log(err);

	}	

}

async function getMovies (query,page) {

	const url = (page) ? `/anime?type=movie&${query}&page=${page}` : `/anime?type=movie&${query}` 

	try {

		const {data} = await instance.get(url);

		return data;

	}

	catch (err) {

		console.log(err);

	}

}

async function getTranslate (page) {

	const url = (page) ? `` : '';

	try {

		const {data} = await instance.get(url);

		return data;

	}

	catch (err) {

		console.log(err);

	}

}

async function getAnime (id) {

	try {

		const {data} = await instance.get(`/anime/${id}`);

		return data;

	}

	catch (err) {

		console.log(err);

	}

}

async function getAnimeCaps (id) {

	try {

		const {data} = await instance.get(`/anime/${id}/videos/episodes`);

		return data; 

	}

	catch (err) {

		console.log(err);

	}

}


async function searchAnime (query,page) {

	const url = (page) ? `/anime?${query}&page=${page}` : `/anime?${query}` 

	try {

		const {data} = await instance.get(url);

		return data

	}

	catch (err) {

		console.log(err);

	}

}

export {getPremiere}
export {getClasics}
export {getHentai}
export {getPopulars}
export {getMovies}
export {getGenres}
export {getTranslate}
export {getAnime}
export {searchAnime}
export {getAnimeCaps}