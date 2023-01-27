import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import navbarStyle from "./Navbar.module.scss";
import { getUserInfo } from "../../services/API";
import {API_URL} from "../../services/Config"

const Navbar = () => {

  const [userInfo, setUserInfo] = useState<any>(null);

  const loadUserInfo = async () => {
    try {
      const res = await getUserInfo();
      if (res) {
        setUserInfo(res.data.user);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadUserInfo();
  }, []);


  const logout = () => {
    window.open(API_URL+"/auth/logout", "_self");
  };



  return (
    <nav className={navbarStyle.navbarContainer}>
      <ul>
        <li className="nav-item">
          <Link
            to={"/dashboard"}
            style={{ textDecoration: "none", color: "white" }}
          >
            Dashboard
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to={"/profile"}
            style={{ textDecoration: "none", color: "white" }}
          >
            {userInfo && userInfo?.name} . {userInfo && userInfo?.email} . {userInfo && userInfo?.googleId} .{userInfo && userInfo?.role}
          </Link>
        </li>

        <li className="nav-item" style={{ cursor: "pointer" }} onClick={logout}>
          Log Out
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;