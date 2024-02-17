import { API_KEY } from "./constants";

const originals = `/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
const trending = `/trending/movie/day?api_key=${API_KEY}`;
const action = `/discover/movie?api_key=${API_KEY}&with_genres=28`;
const search = `/search/movie?api_key=${API_KEY}&include_adult=false`;

export { originals, trending, action, search };
