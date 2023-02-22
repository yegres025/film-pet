import React from "react";
import { useRouteError } from "react-router-dom";
import "./ErrorPage.css";

function ErroPage() {
  const error = useRouteError();
  // console.log(error);

  return (
    <div className="error_wrapper">
      <div className="error_message_0">😲 ВОООО ДЕЛААААА</div>
      <div className="error_message_1">
        что-то пошло не так 😞 , вернитесь на прошлую страницу 👈🏻
      </div>
      <img className="error_gif" src="https://i.gifer.com/Rtpf.gif" />
    </div>
  );
}

export default ErroPage;
