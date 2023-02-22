for (let i = 1965; i <= 2020; i = i +1){
    console.log(i+',')
}

import { itemCardItem } from "../itemList/itemList";
import { FILMS_LIST, PAGINATION_LIST } from "./actions";

const defaultStateList = itemCardItem
const defaultStatePaginationList = []

interface ActionInfoInterface {
  type: string;
  payload: [];
}

export function filmsList(
  state = defaultStateList,
  action: ActionInfoInterface
) {
  switch (action.type) {
    case FILMS_LIST:
      return action.payload

    default:
      return state;
  }
}

export function paginationFilmsList(
  state = defaultStatePaginationList,
  action: ActionInfoInterface
) {
  switch (action.type) {
    case PAGINATION_LIST:
      return {...state, action.payload}

    default:
      return state;
  }
}


  // useEffect(() => {
  //   if (currentSelect === "Сначала менее популярные") {
  //     dispatch({ type: "FILMS_LIST", payload: [] });
  //   } else {
  //     dispatch({ type: "FILMS_LIST", payload: [] });
  //   }
  // }, []);

  for (let i = 1965; i <=2023; i = i +1) {
    console.log(i)
  }

  const filter = (year: string) => {
    dispatch(filmsList(itemCardItem) );
    if(topSelect === 'Сначала популярные'){
    dispatch(filmsList(currentListPop))
    } else if (topSelect === 'Сначала менее популярные'){
      dispatch(filmsList(currentListPop.reverse()))
    } else if (topSelect === 'Высокий рейтинг'){
    dispatch(filmsList(currentListVote));
  } else {
    dispatch(filmsList(currentListVote.reverse()))
  }