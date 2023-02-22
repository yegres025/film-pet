import { itemCardItem } from "../itemList/itemList";
import format from "date-fns/format";
import { payloadInterface } from "../redux/actions";
import { useDispatch } from "react-redux";
import { filmsList } from "../redux/actions";

const list = itemCardItem;

list.sort(
  (a: { vote_average: number }, b: { vote_average: number }) =>
    b.vote_average - a.vote_average
);

export const topFilter = (select: string, method: any) => {
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
            b.popularity - a.popularity
        )
      )
    );
  } else if (select === "Высокий рейтинг") {
    method(
      filmsList(
        list.sort(
          (a: { vote_average: number }, b: { vote_average: number }) =>
            a.vote_average - b.vote_average
        )
      )
    );
  } else if (select === "Низкий рейтинг") {
    method(
      filmsList(
        list.sort(
          (a: { vote_average: number }, b: { vote_average: number }) =>
            b.vote_average - a.vote_average
        )
      )
    );
  }
};


export const currentYearFilter = (year: string) =>
  itemCardItem.filter(
    (item) => format(new Date(item.release_date), "yyyy") === year
  );

const yearFilter = (year: string, method, yearFilterObj: payloadInterface) => {
  if (year === "2020") {
    method(filmsList(yearFilterObj));
  } else if (year === "2019") {
    method(filmsList(yearFilterObj));
  } else if (year === "2018") {
    method(filmsList(yearFilterObj));
  } else if (year === "2017") {
    method(filmsList(yearFilterObj));
  }
};

export function filter(
  select: string,
  method: any,
  year = "2020",
  yearFilterObj,
  
) {
  topFilter(select, method);
  yearFilter(year, method, yearFilterObj);
  
}