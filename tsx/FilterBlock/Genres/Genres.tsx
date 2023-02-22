import "./Genres.css";
useSelector;
import React, { useEffect, useState } from "react";
import { genresList } from "../../../ts/itemList/itemList";
import { useSelector, useDispatch } from "react-redux";
import { genresFilterListCheck } from "../../../ts/redux/actions";
import { filmsList } from "../../../ts/redux/actions";


function Genres() {

  const [genresFilterList, setGenresList] = useState([]);
  const dispatch = useDispatch();
  
  const handleId = (id: number) => {
    if (genresFilterList.includes(id)) {
      setGenresList(genresFilterList.filter((item) => item !== id));
    } else {
      setGenresList([...genresFilterList, id]);
    }
  };

  useEffect(() => {
    dispatch(genresFilterListCheck(genresFilterList));
  }, [genresFilterList]);

  return (
    <div>
      {genresList.map((item) => (
        <div key={item.id} className="genres_wrapper">
          <input
            onClick={() => {handleId(item.id)}}
            className="genres_check"
            type="checkbox"
          ></input>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Genres;
