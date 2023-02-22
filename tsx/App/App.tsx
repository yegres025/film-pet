import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "../../ts/redux/store";
import Header from "../Header/Header";
import FilterBlock from "../FilterBlock/FilterBlock";

function App() {
  const [favoriteFilms, setFavoritFilms] = useState([]);
  const [laterWatchFilms, setLaterWatchFilms] = useState([]);

  const upStateFilms = (item: []) => {
    console.log(item);
    
  }
 
  

  return (
    <div className="App">
      <Provider store={store}>
        <Header />

        <div className="used_space">
          <FilterBlock />
          <Outlet />
        </div>
        
      </Provider>
    </div>
  );
}

export default App;
