import { combineReducers } from "redux";
import movieReducer from "../redux/MovieReducer";

const rootReducer = combineReducers({
  movies: movieReducer,
});

export default rootReducer;