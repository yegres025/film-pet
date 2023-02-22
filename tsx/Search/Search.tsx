import React, { useEffect, useState } from "react";
import "./Search.css";
import { nanoid } from "nanoid";
import { genresList } from "../../ts/itemList/itemList";
import { useSelector, Provider, useDispatch } from "react-redux";
import { store } from "../../ts/redux/store";
import { itemCardItem } from "../../ts/itemList/itemList";
import { searchFilmList, paginationSearchList } from "../../ts/redux/actions";

function Search() {
  const [genreName, setGenreName] = useState("");
  const [genreId, setGenreId] = useState([]);
  const [rating, setRating] = useState();
  const [popularity, setPopularity] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleItem] = useState(1);

  const dispatch = useDispatch();
  const listSearch = useSelector((state) => state.search);
  const currentFilmSearc = useSelector((state) => state.paginationSearch);
  const lastPageIndex = currentPage * visibleItem;
  const firstPageIndex = lastPageIndex - visibleItem;

  const currentList = listSearch.slice(firstPageIndex, lastPageIndex);

  useEffect(() => {
    const id = genresList.find((item) => item.name === genreName);
    setGenreId([id !== undefined ? id.id : null]);
  }, [genreName]);

  useEffect(() => {
    dispatch(paginationSearchList(currentList));
  }, [currentPage]);

  useEffect(() => {
    let currentSearchGenres = itemCardItem.filter((item) =>
      genreId.some((id) => item.genre_ids.includes(id))
    );

    if (rating !== undefined) {
      if (rating === "высокая оценка") {
        currentSearchGenres = currentSearchGenres.filter(
          (item) => item.vote_average >= "5"
        );
      } else if (rating === "низкая оценка") {
        currentSearchGenres = currentSearchGenres.filter(
          (item) => item.vote_average < "4.9"
        );
      }
    } else {
      currentSearchGenres;
    }

    popularity !== undefined
      ? popularity === "более популярные"
        ? (currentSearchGenres = currentSearchGenres.filter(
            (item) => item.popularity >= "100"
          ))
        : (currentSearchGenres = currentSearchGenres.filter(
            (item) => item.popularity < "100"
          ))
      : null;

    dispatch(searchFilmList(currentSearchGenres));
  }, [genreId, rating, popularity]);

  return (
    <Provider store={store}>
      {currentFilmSearc.map((card) => (
        <div key={nanoid()} className="search_wrapper">
          <div className="select_wrapper">
            <select onClick={(e) => setGenreName(e.target.value)}>
              {genresList.map((item) => (
                <option key={item.id}>{item.name}</option>
              ))}
            </select>

            <select onClick={(e) => setRating(e.target.value)}>
              <option>высокая оценка</option>
              <option>низкая оценка</option>
            </select>

            <select onClick={(e) => setPopularity(e.target.value)}>
              <option>более популярные</option>
              <option>менее популярные</option>
            </select>

            {listSearch.length === 0 ? (
              <div className="entry_filter">Выберите фильтры</div>
            ) : (
              <div>
                {currentPage === 1 ? null : (
                  <button
                    onClick={() =>
                      setCurrentPage((currentPage) => currentPage - 1)
                    }
                  >
                    ⋘
                  </button>
                )}
                {lastPageIndex === listSearch.length ? null : (
                  <button
                    onClick={() =>
                      setCurrentPage((currentPage) => currentPage + 1)
                    }
                  >
                    ⋙
                  </button>
                )}
              </div>
            )}
          </div>

          <div className="film_wrapper">
            <img src={`https://image.tmdb.org/t/p/w500/${card.poster_path}`} />
            <div>{card.title}</div>
          </div>
        </div>
      ))}
    </Provider>
  );
}

export default Search;
