import React, {useState, useEffect} from "react";
import Cookies from 'js-cookie'
import {Link } from "react-router-dom";
import "./Header.css";
function Header() {
  const [login, setLogin] = useState()
  
  useEffect(() => {
    setLogin(Cookies.get('password'))
  }, [login])

  const exitAccount = () => {
    Cookies.remove('login');
    Cookies.remove('password')
  }


  return (
    <header className="header">
      <Link to={'./list'} className="btn_home">Home</Link>
      <div className="search_container">
        <Link to={'./search'} placeholder="Entry title" className="button_search">Search</Link>
        <div className="searc_logo"></div>
      </div>
      {!login ? <Link to={'/login'} className="btn_login"></Link> : <button onClick={exitAccount} className="exit_btn"></button>}
    </header>
  );
}

export default Header;


