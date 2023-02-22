export interface payloadInterface {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const FILMS_LIST = "FILMS_LIST";
export const PAGINATION_LIST = "PAGINATION_LIST";
export const CURRENT_TOP_SELECT = "CURRENT_TOP_SELECT";
export const CURRENT_YEAR_SELECT = "CURRENT_YEAR_SELECT";
export const GENRES_FILTER_LIST = "GENRES_FILTER_LIST";
export const CURRENT_CARD_ITEM = "CURRENT_CARD_ITEM";
export const SEARCH_FILM_LIST = "SEARCH_FILM_LIST";
export const PAGINATION_SEARCH_LIST ='PAGINATION_SEARCH_LIST' 

export function filmsList(payload: payloadInterface) {
  return {
    type: FILMS_LIST,
    payload,
  };
}

export function paginationList(payload: payloadInterface) {
  return { type: PAGINATION_LIST, payload };
}

export function currentTopSelect(payload: string) {
  return {
    type: CURRENT_TOP_SELECT,
    payload,
  };
}

export function currentYearSelect(payload: string) {
  return {
    type: CURRENT_YEAR_SELECT,
    payload,
  };
}

export function genresFilterListCheck(payload: number) {
  return {
    type: GENRES_FILTER_LIST,
    payload,
  };
}

export function currentCardItem(payload: payloadInterface) {
  return {
    type: CURRENT_CARD_ITEM,
    payload,
  };
}

export function searchFilmList(payload: []) {
  return {
    type: SEARCH_FILM_LIST,
    payload,
  };
}



export function paginationSearchList (payload: []){
  return {
    type: PAGINATION_SEARCH_LIST,
    payload
  }
}

