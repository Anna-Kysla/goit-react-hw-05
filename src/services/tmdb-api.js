import axios from "axios";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "02e248e38c68043938bb98c811cac280";

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(
    `${API_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  return data.results;
};

export const searchMovies = async (query) => {
  const { data } = await axios.get(
    `${API_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return data.results;
};

export const fetchMovieDetails = async (id) => {
  const { data } = await axios.get(`${API_URL}/movie/${id}?api_key=${API_KEY}`);
  return data;
};

export const fetchMovieCast = async (id) => {
  const { data } = await axios.get(
    `${API_URL}/movie/${id}/credits?api_key=${API_KEY}`
  );
  return data.cast;
};

export const fetchMovieReviews = async (id) => {
  const { data } = await axios.get(
    `${API_URL}/movie/${id}/reviews?api_key=${API_KEY}`
  );
  return data.results;
};
