import "./FilterSelector.css";
import React, { useEffect } from "react";
import { filterList } from "../../../ts/itemList/itemList";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { currentTopSelect } from "../../../ts/redux/actions";
import { filterListCard } from "../../../ts/Filter/listFilter";

function FilterSelector() {
  const select = useSelector(
    (state: { chekedSelect: string }) => state.chekedSelect
  );

  const year = useSelector(
    (state: { currentYear: string }) => state.currentYear
  );
  const genre = useSelector((state: { genres: [number] }) => state.genres);
  const dispatch = useDispatch();

  useEffect(() => {
    filterListCard(dispatch, select, year, genre[0]);
  }, [genre, select, year]);

  const handleSelect = (e: { target: { value: string } }) => {
    dispatch(currentTopSelect(e.target.value));
  };

  return (
    <select
      value={select}
      onChange={(e) => handleSelect(e)}
      className="filter_selector"
    >
      {filterList.map((item) => (
        <option key={nanoid()}>{item}</option>
      ))}
    </select>
  );
}

export default FilterSelector;
