import axios from 'axios';

const getGifs = (search = 'kittens') => {
    const api_key = 'siIyo4w5mg0REENX76Sr57QTgkt3BWvY';
    return axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${search}`)
        .then(response => {
            const {data} = response; // this is object of API response
            return data.data.map(currentGif => { // data.data is list of gif objects
                return currentGif.images.original.url; // pull out the URL and return in map
            }); // ["gif_url_1", "gif_url_2"]
        })
}

export { getGifs };