import React, { useState, useEffect } from "react";
import "./List.css";
import { useSelector } from "react-redux";
import ItemCard from "../ItemCard/itemCard";
import { itemCardItem } from "../../ts/itemList/itemList";

function List(props) {
  const [favoriteFilms, setFavoritFilms] = useState([]);
  const [laterWatchFilms, setLaterWatchFilms] = useState([]);

  const list: cardInterface[] = useSelector(
    (state: { pagination: [] }) => state.pagination
  );

  interface cardInterface {
    id: number;
    poster_path: string;
    title: string;
    vote_average: number;
  }

  const handleFilms = (title, setter, arrFilms) => {
    const currentFavoritFilm = itemCardItem.find(
      (item) => item.title === title
    );
    arrFilms.includes(currentFavoritFilm)
      ? setter(
        arrFilms.filter((item) => item !== currentFavoritFilm)
        )
      : setter([...arrFilms, currentFavoritFilm]);
  };

  useEffect(() => {
    localStorage.setItem('favorit', JSON.stringify(favoriteFilms))
    localStorage.setItem('laterFilm', JSON.stringify(laterWatchFilms))

  },[favoriteFilms, laterWatchFilms])
  
  

  return (
    <div>
      <div className="grid_wrapper">
        {list.map((item) => (
          <ItemCard
            key={item.id}
            url={item.poster_path}
            vote_average={item.vote_average}
            title={item.title}
            funcStar={() => handleFilms(item.title, setFavoritFilms, favoriteFilms)}
            funcBook= {() => handleFilms(item.title, setLaterWatchFilms, laterWatchFilms)}
          />
        ))}
      </div>
    </div>
  );
}

export default List;
