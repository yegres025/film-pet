import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  filmsList,
  paginationFilmsList,
  currentSelect,
  currentYear,
  genresFilterList,
  currentCard,
  searchFilm,
  paginationSearch
} from "./reducers";

const rootReducer = combineReducers({
  list: filmsList,
  pagination: paginationFilmsList,
  chekedSelect: currentSelect,
  currentYear: currentYear,
  genres: genresFilterList,
  currentCard: currentCard,
  search: searchFilm,
  paginationSearch: paginationSearch
});

export const store = createStore(rootReducer, composeWithDevTools());
