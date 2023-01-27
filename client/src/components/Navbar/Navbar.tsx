import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

import navbarStyle from "./Navbar.module.scss";


const Navbar = () => {

  let navigate = useNavigate();




  return (
    <nav className={navbarStyle.navbarContainer}>
        <ul>
          <li className="nav-item">
            <Link
              to={"/dashboard"}
              style={{ textDecoration: "none",color: "white"}}
            >
            Dashboard
            </Link>
          </li>

      

          <li className="nav-item">
            <Link
              to={"/profile"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Profile
            </Link>
          </li>

          <li className="nav-item" style={{cursor:"pointer"}}>
            
              Log Out
         
          </li>

       

        </ul>
     

    </nav>
  )
}

export default Navbar