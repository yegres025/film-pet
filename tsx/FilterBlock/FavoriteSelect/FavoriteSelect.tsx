import React from "react";
import { useDispatch } from "react-redux";
import { filmsList } from "../../../ts/redux/actions";
import "./FavoriteSelect.css";

function FavoriteSelect() {
  const dispatch = useDispatch()

  const favoritFilmsLaterFilms = (key: string) => {
    dispatch(filmsList(JSON.parse(localStorage.getItem(key))))
  }

  return (
    <div className="btn_wrap">
      <button onClick={() => favoritFilmsLaterFilms('favorit')}>Избранные</button>
      <button onClick={() => favoritFilmsLaterFilms('laterFilm')}>Отложенные</button>
    </div>
  );
}

export default FavoriteSelect;
