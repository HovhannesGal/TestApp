import React, { useContext } from "react";
import { Context } from "../context";
import "../App.css";
import { Link } from "react-router-dom";
import {observer} from "mobx-react-lite"

const NavBar = () => {
  const { user } = useContext(Context);
  return (
    <div>
      <div className="kar">
        <Link
          to="/Shop"
          style={{ color: "white", textDecoration: "none", marginLeft: "10px" }}
        >
          G-Project
        </Link>

        {user._isAuth ?
        <div className="btnPack">
          <button className="btnNav" style={{ marginRight: 5 }}>
            <Link to="/auth" style={{ color: "black", textDecoration: "none" }}>
              Register
            </Link>
          </button>
          <button className="btnNav" style={{ marginRight: 5 }}>
            <Link
              to="/Admin"
              style={{ color: "black", textDecoration: "none" }}
            >
              Admin Panel
            </Link>

          </button>
        </div>
        :
        <div className="btnPack">
          <button className="btnNav" style={{ marginRight: 5 }}>
            <Link to="/auth" style={{ color: "black", textDecoration: "none" }}>
              Авторизация
            </Link>
          </button>
         
          <button className="btnNav" style={{ marginRight: 5 }}>
            <Link
              to="/auth"
              style={{ color: "black", textDecoration: "none" }}
            >
              Регистрация
            </Link>

          </button>
        </div>
}
      </div>
    </div>
  );
};

export default observer(NavBar);
