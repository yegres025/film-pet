import React, {useState} from "react";
import Genres from "./Genres/Genres";
import { itemCardItem } from "../../ts/itemList/itemList";
import { filmsList, currentTopSelect, currentYearSelect } from "../../ts/redux/actions";
import { useDispatch } from "react-redux";
import FavoriteSelect from "./FavoriteSelect/FavoriteSelect";
import Cookies from 'js-cookie'
import "./FilterBlock.css";
import ReleaseYear from "./ReleaseYear/ReleaseYear";
import FilterSelector from "./FilterSelector/FilterSelector";
import Pagination from "./Pagination/Pagination";
function FilterBlock() {
  const dispatch = useDispatch();

  const resetSelect = () => {
    dispatch(currentTopSelect('Сначала популярные'))
    dispatch(currentYearSelect('2020'));
    dispatch(filmsList(itemCardItem));
  };

  const [cookie] = useState(Cookies.get('password'))

  return (
    <div className="filter_wrapper">
      <div className="filter_header">Фильтры:</div>
      <button onClick={resetSelect} className="filter_reset">
        Сбросить все фильтры
      </button>

      <div>Сортировать по:</div>
      <FilterSelector />

      <div>Год релиза:</div>
      <ReleaseYear />

      {!cookie ? null : <FavoriteSelect />}

      <Genres />
      <Pagination />

    </div>
  );
}

export default FilterBlock;
