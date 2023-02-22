import React from "react";
import ReactDOM from "react-dom/client";
import ErroPage from "../Error/ErrorPage";
import App from "../App/App";
import Login from "../Header/Login/Login";
import ItemCardInfo from "../ItemCard/ItemCardInfo";
import List from "../List/List";
import Search from "../Search/Search";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    errorElement: <ErroPage />,
    children: [
      {
        path: '/list',
        element: <List /> ,
      },
      {
        path: '/film_info',
        element: <ItemCardInfo />
      },
      {
        path: '/search', 
        element: <Search />,
        errorElement: <ErroPage />
      },
    ]
  }, 
  {
    path: '/login', 
    element: <Login />
  },
  
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
