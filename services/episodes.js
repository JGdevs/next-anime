import axios from 'axios';

const instance = axios.create({

  baseURL: 'https://gogoanime.consumet.org/vidcdn/watch/',

});

async function getVideoCaps (id) {

	try {

    const {data} = await instance.get(id);

    return data;

  }

  catch (err) {

    console.log(err);

  }

}


export {getVideoCaps}