import { filmsList } from "../redux/actions";
import { itemCardItem } from "../itemList/itemList";
import { payloadInterface } from "../redux/actions";

import format from "date-fns/format";

export function filterListCard(
  
  method: any,
  select: string,
  year: string,
  genre: []
) {
  
  const list: payloadInterface = itemCardItem;

  {
    if (select === "Сначала популярные") {
      method(
        filmsList(
          list.sort(
            (a: { popularity: number }, b: { popularity: number }) =>
              b.popularity - a.popularity
          )
        )
      );
    } else if (select === "Сначала менее популярные") {
      method(
        filmsList(
          list.sort(
            (a: { popularity: number }, b: { popularity: number }) =>
              a.popularity - b.popularity
          )
        )
      );
    } else if (select === "Высокий рейтинг") {
      method(
        filmsList(
          list.sort(
            (a: { vote_average: number }, b: { vote_average: number }) =>
              b.vote_average - a.vote_average
          )
        )
      );
    } else if (select === "Низкий рейтинг") {
      method(
        filmsList(
          list.sort(
            (a: { vote_average: number }, b: { vote_average: number }) =>
              a.vote_average - b.vote_average
          )
        )
      );
    }
  }

  const stateYear = (year: string) =>
    list.filter((item) => format(new Date(item.release_date), "yyyy") === year);

  if (year === "2020") {
    method(filmsList(stateYear(year)));
  } else if (year === "2019") {
    method(filmsList(stateYear(year)));
  } else if (year === "2018") {
    method(filmsList(stateYear(year)));
  } else if (year === "2017") {
    method(filmsList(stateYear(year)));
  }

  !genre[0]
  ? list
    : method(
        filmsList(
          list.filter((item) => genre.some((id) => item.genre_ids.includes(id)))
        )
      )
      // console.log(genre[0].length)
}
