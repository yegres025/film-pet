import React from "react";
import { nanoid } from "nanoid";

import { useDispatch, useSelector } from "react-redux";
import "./ReleaseYear.css";
import { currentYearSelect } from "../../../ts/redux/actions";
import { yearsList } from "../../../ts/itemList/itemList";
function ReleaseYear() {
  const year = useSelector((state:{currentYear: string})=> state.currentYear)
  const dispatch = useDispatch();


  


  const handleSelect = (e: { target: { value: string } }) => {
    dispatch(currentYearSelect(e.target.value))
  };
  return (
    <select
      value={year}
      onChange={(e) => handleSelect(e)}
      className="filter_selector"
    >
      {yearsList.map((item) => (
        <option key={nanoid()}>{item}</option>
      ))}
    </select>
  );
}

export default ReleaseYear;
