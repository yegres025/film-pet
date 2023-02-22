import React from "react";
import "./ItemCardInfo.css";
import { payloadInterface } from "../../ts/redux/actions";
import { useSelector } from "react-redux";
function ItemCardInfo() {
  const info = useSelector(
    (state: { currentTitle: payloadInterface[] }) => state.currentCard
  );

  return (
    <div className="item_card_moreinfo_wrapper">
      <div className="item_card_info_halfs">
        <img
          src={`https://image.tmdb.org/t/p/w500/${info.currentCardFilm.backdrop_path}`}
          className="item_card_info_background"
        />
        <div className="item_card_info_halfs_top">
          <img
            className="item_card_moreinfo_title"
            src={`https://image.tmdb.org/t/p/w500/${info.currentCardFilm.poster_path}`}
            alt=""
          />
          <div>
            <h1>{info.currentCardFilm.title}</h1>
            <div className="item_card_info_text_rate">
              Рейтинг: {info.currentCardFilm.vote_average}
            </div>
            <div className="item_card_info_text_overview">
              {info.currentCardFilm.overview}
            </div>
          </div>
        </div>
      </div>

      <div className="item_card_info_bottom">
        <div className="item_card_info_btn_pop_container">
          <button className="item_card_info_btn_pop">Детали</button>
          <button className="item_card_info_btn_pop">Видео</button>
          <button className="item_card_info_btn_pop">Актеры</button>
        </div>
        <div className="item_card_info_halfs_detail">
          <div className="item_card_info_text_detail">
            <div className="item_card_info_text_detail_current">Статус</div>
            <div className="item_card_info_text_detail_current">
              Дата выхода
            </div>
            <div className="item_card_info_text_detail_current">
              Продолжительность
            </div>
            <div className="item_card_info_text_detail_current">
              Язык оригинала
            </div>
            <div className="item_card_info_text_detail_current">Страна</div>
            <div className="item_card_info_text_detail_current">Бюджет</div>
          </div>

          <div className="item_card_info_text_detail">
            <div className="item_card_info_text_detail_current">Released</div>
            <div className="item_card_info_text_detail_current">{info.currentCardFilm.release_date}</div>
            <div className="item_card_info_text_detail_current">117 минут</div>
            <div className="item_card_info_text_detail_current">{info.currentCardFilm.original_language}</div>
            <div className="item_card_info_text_detail_current">USA</div>
            <div className="item_card_info_text_detail_current">15800000</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCardInfo;
