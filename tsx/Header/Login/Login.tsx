import React, {useState} from "react";
import Cookies from 'js-cookie'
import { Link } from "react-router-dom";
import "./Login.css";
function Login() {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    console.log(login, password)

    const handleLogin = () => {
        Cookies.set('login', (login))
        Cookies.set('password', (password))
    }

  return (
    <div  className="login_wrapper">
      <div className="entry_wrapper">
        <div className="entry_text">Вход</div>
        <Link to={"/List"} className="entry_x">
          ✕
        </Link>
        <form onSubmit={(e) => {
            e.preventDefault();
            handleLogin()
        }}  className="entry_form">
          <div>
            <input onChange={(e) => setLogin(e.target.value)} placeholder="Login" className="entry_name" />
            <input  onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          </div>
          <button className="entry_btn"></button>
        </form>
      </div>
    </div>
  );
}

export default Login;
