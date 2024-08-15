/*const initialState = {
    movies: [],
  };
  
  const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_MOVIES":
        return {
          ...state,
          movies: action.payload, // Replaces the existing movies with the new list
        };
  
      case "ADD_MOVIE":
        return {
          ...state,
          movies: [...state.movies, action.payload], // Adds a new movie to the existing list
        };
  
      case "REMOVE_MOVIE":
        return {
          ...state,
          movies: state.movies.filter((movie) => movie.id !== action.payload), // Removes a movie by ID
        };
  
      case "UPDATE_MOVIE":
        return {
          ...state,
          movies: state.movies.map((movie) =>
            movie.id === action.payload.id
              ? { ...movie, ...action.payload } // Updates a movie by ID
              : movie
          ),
        };
  
      case "CLEAR_MOVIES":
        return {
          ...state,
          movies: [], // Clears the entire movie list
        };
  
      default:
        return state; // Returns the current state if the action type doesn't match
    }
  };
  
  export default movieReducer;
  */

  /*const initialState = {
    movies: [],
  };
  
  const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_MOVIES":
        return {
          ...state,
          movies: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default movieReducer;*/

  // src/Redux/movieReducer.js
  //3
  /*const initialState = {
    movies: [],
  };
  
  const MovieReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_MOVIE':
        return {
          ...state,
          movies: [...state.movies, action.payload],
        };
      
      case 'REMOVE_MOVIE':
        return {
          ...state,
          movies: state.movies.filter(movie => movie.id !== action.payload.id),
        };
      
      case 'UPDATE_MOVIE':
        return {
          ...state,
          movies: state.movies.map(movie =>
            movie.id === action.payload.id ? { ...movie, ...action.payload.data } : movie
          ),
        };
      
      case 'CLEAR_MOVIES':
        return {
          ...state,
          movies: [],
        };
      
      case 'SET_MOVIES':
        return {
          ...state,
          movies: action.payload,
        };
      
      default:
        return state;
    }
  };
  export default MovieReducer;*/

  // src/redux/MovieReducer.js
import { 
  SET_MOVIES, 
  ADD_MOVIE, 
  REMOVE_MOVIE, 
  UPDATE_MOVIE, 
  CLEAR_MOVIES 
} from './constants'; // Import the constants from the correct path

const initialState = {
  movies: [],
};

const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };

    case REMOVE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(movie => movie.id !== action.payload),
      };

    case UPDATE_MOVIE:
      return {
        ...state,
        movies: state.movies.map(movie =>
          movie.id === action.payload.id ? { ...movie, ...action.payload.data } : movie
        ),
      };

    case CLEAR_MOVIES:
      return {
        ...state,
        movies: [],
      };

    case SET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };

    default:
      return state;
  }
};

export default MovieReducer;


  