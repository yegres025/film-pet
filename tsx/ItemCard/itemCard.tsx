import "./itemCard.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { itemCardItem } from "../../ts/itemList/itemList";
import { useDispatch } from "react-redux";
import { currentCardItem } from "../../ts/redux/actions";
export interface ItemCardInterface {
  title: string;
  vote_average: number;
  url: string;
  funcStar: any,
  funcBook: any
}

function ItemCard({ url, title, vote_average, funcStar, funcBook }: ItemCardInterface) {
  const img = `https://image.tmdb.org/t/p/w500/${url}`;

  const [currentTitle, setCurrentTitle] = useState();
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    const currentCardFilm = itemCardItem.find(
      (item) => item.title === currentTitle
    );
    dispatch(currentCardItem({ currentCardFilm }));
  }, [currentTitle]);

  return (
    <div className="card_wrapper">
      <img className="card_img" src={img} />
      <div className="card_title">{title}</div>

      <div className="card_rating">
        <div className="rating">Рейтинг:{vote_average}</div>
        <button onClick={funcStar} className="btn_star"></button>
        <button onClick={funcBook}  className="btn_book"></button>
      </div>
      <div>
        <Link
          to={"/film_info"}
          onMouseMove={() => setCurrentTitle(title)}
          className="more_info"
        >
          Подробнее...
        </Link>
      </div>
    </div>
  );
}

export default ItemCard;

//
