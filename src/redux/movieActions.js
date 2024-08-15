/*import axios from "axios";

const API_KEY = "49a5508b99e54cbf67438655e1565e32"; // Replace with your actual TMDB API key
const API_BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    dispatch({ type: "SET_MOVIES", payload: response.data.results });
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};*/



/*import axios from "axios";

const API_KEY = "49a5508b99e54cbf67438655e1565e32"; // Replace with your actual TMDB API key
const API_BASE_URL = "https://api.themoviedb.org/3";


// Fetch Movies Action
export const fetchMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    dispatch({ type: SET_MOVIES, payload: response.data.results });
  } catch (error) {
    console.error("Error fetching movies:", error);
    // You can dispatch an error action here if needed, e.g.,
    // dispatch({ type: "FETCH_MOVIES_ERROR", payload: error.message });
  }
};

// Add Movie Action
export const addMovie = (movie) => {
  return {
    type: ADD_MOVIE,
    payload: movie,
  };
};

// Remove Movie Action
export const removeMovie = (movieId) => {
  return {
    type: REMOVE_MOVIE,
    payload: movieId,
  };
};

// Update Movie Action
export const updateMovie = (movie) => {
  return {
    type: UPDATE_MOVIE,
    payload: movie,
  };
};

// Clear Movies Action
export const clearMovies = () => {
  return {
    type: CLEAR_MOVIES,
  };
};*/

// src/redux/movieActions.js
// src/redux/movieActions.js
import axios from 'axios';
import { 
  SET_MOVIES, 
  ADD_MOVIE, 
  REMOVE_MOVIE, 
  UPDATE_MOVIE, 
  CLEAR_MOVIES 
} from './constants'; // This should be './constants' if the file is in the same directory

const API_KEY = "49a5508b99e54cbf67438655e1565e32"; // Replace with your actual TMDB API key
const API_BASE_URL = "https://api.themoviedb.org/3";

// Fetch Movies Action
export const fetchMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    dispatch({ type: SET_MOVIES, payload: response.data.results });
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};

// Add Movie Action
export const addMovie = (movie) => {
  return {
    type: ADD_MOVIE,
    payload: movie,
  };
};

// Remove Movie Action
export const removeMovie = (movieId) => {
  return {
    type: REMOVE_MOVIE,
    payload: movieId,
  };
};

// Update Movie Action
export const updateMovie = (movie) => {
  return {
    type: UPDATE_MOVIE,
    payload: movie,
  };
};

// Clear Movies Action
export const clearMovies = () => {
  return {
    type: CLEAR_MOVIES,
  };
};



