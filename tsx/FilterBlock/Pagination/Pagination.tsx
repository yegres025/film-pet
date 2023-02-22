import "./Pagination.css";
import React, { useState, useEffect } from "react";
import { paginationList } from "../../../ts/redux/actions";
import { useDispatch, useSelector } from "react-redux";


function Pagination() {
  const [checkPage, setCheckPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleItem] = useState(10);
  const [lastPage, setLastPage] = useState(Number)

  const list = useSelector((state: { list: [] }) => state.list);
  
  const dispatch = useDispatch();
  
  const lastPageIndex = currentPage * visibleItem;
  const firstPageIndex = lastPageIndex - visibleItem;
  // console.log(list)
  const currentList = list.slice(firstPageIndex, lastPageIndex);
  
  
  const handlePagePlus = () => {
    setCurrentPage((currentPage) => currentPage + 1);
    dispatch(paginationList(currentList) );
    setCheckPage((checkPage) => checkPage + 1);
  };
  
  const handlePageSubtrack = () => {
    setCurrentPage((currentPage) => currentPage - 1);
    dispatch(paginationList(currentList) );
    setCheckPage((checkPage) => checkPage - 1);
  };

  useEffect(() => {
    setLastPage(Number((list.length)/10))
  }, [list])
  
  useEffect(() => {
    dispatch(paginationList(currentList));
  }, [list ,currentPage]);
  
  return (
    <div>
      <div className="filter_btn">
        {checkPage === 0 ? (
          <div className="btn_lock">Назад</div>
        ) : (
          <button onClick={() => handlePageSubtrack()} className="btn">
            Назад
          </button>
        )}
        {checkPage === Math.round(lastPage - 1) ? (
          <div className="btn_lock">Вперед</div>
        ) : (
          <button onClick={() => handlePagePlus()} className="btn">
            Вперед
          </button>
        )}
      </div>
      <div className="number_page">{checkPage + 1} of {Math.round(lastPage)}</div>
    </div>
  );
}

export default Pagination;
