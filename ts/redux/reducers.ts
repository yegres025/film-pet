import { itemCardItem, genresList } from "../itemList/itemList";
import { payloadInterface } from "./actions";

import {
  FILMS_LIST,
  PAGINATION_LIST,
  CURRENT_TOP_SELECT,
  CURRENT_YEAR_SELECT,
  GENRES_FILTER_LIST,
  CURRENT_CARD_ITEM,
  SEARCH_FILM_LIST,
  PAGINATION_SEARCH_LIST
} from "./actions";

const defaultStateList = itemCardItem;
const defaultStatePagination: [] = [];
interface ActionInfoInterface {
  type: string;
  payload: [];
}

interface PaginationInterface {
  type: string;
  payload: [];
}

export function filmsList(
  state = defaultStateList,
  action: ActionInfoInterface
) {
  switch (action.type) {
    case FILMS_LIST:
      return action.payload;

    default:
      return state;
  }
}

export function paginationFilmsList(
  state = defaultStatePagination,
  action: PaginationInterface
) {
  switch (action.type) {
    case PAGINATION_LIST:
      return action.payload;

    default:
      return state;
  }
}

export function currentSelect(
  state = "Сначала популярные",
  action: { type: string; payload: string }
) {
  switch (action.type) {
    case CURRENT_TOP_SELECT:
      return action.payload;

    default:
      return state;
  }
}

export function currentYear(
  state = "2020",
  action: { type: string; payload: string }
) {
  switch (action.type) {
    case CURRENT_YEAR_SELECT:
      return action.payload;

    default:
      return state;
  }
}

export function genresFilterList(
  state = itemCardItem,
  action: { type: string; payload: number }
) {
  switch (action.type) {
    case GENRES_FILTER_LIST:
      return [action.payload];

    default:
      return state;
  }
}

export function currentCard(
  state = {},
  action: { type: string; payload: payloadInterface }
) {
  switch (action.type) {
    case CURRENT_CARD_ITEM:
      return action.payload;

    default:
      return state;
  }
}

export function searchFilm (
  state = itemCardItem,
  action:{type: string, payload: payloadInterface}
  ){
    switch (action.type) {
      case SEARCH_FILM_LIST:
        return action.payload;

    default:
      return state;
    }
  }

  export function paginationSearch (state = [], action:{type: string, payload: []}) {
      switch (action.type){
        case PAGINATION_SEARCH_LIST:
          return action.payload

        default:
          return state
      }
  }

  