import React, { useRef } from "react";

import "./Nav.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcaseMedical, faUser, faCartShopping, faBagShopping, faCircleHalfStroke, faRightFromBracket, faSearch, faHeart, faShoppingCart, faArrowRightToBracket, faX, faBars } from '@fortawesome/free-solid-svg-icons';
import UserContext from "../usecontext/Usercontext";
import { useContext, useState } from "react";

import { useLocation } from 'react-router-dom'
import { Item } from "../Item/Item";
import { Link, useNavigate } from 'react-router-dom';

function Nav() {
  const { toggleTheme, logout } = useContext(UserContext)


  const [search, setSearch] = useState("");
  const handleSearch = event => {
    setSearch(event.target.value);
  };
  // Filter Search Data
  const filterSearchData = Item.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );


  const location = useLocation()
  const navigate = useNavigate()

  
  const logouts = () => {
    logout();
  }

  const [activelink, setActiveLink] = useState(null);

  // Function to handle click on navbar links
  const appear = (link) => {
   console.log("cat")
  };

 const [mobile,SetMobile]=useState(false)


  return (
    <nav>
    <div className="cap" >
      <Link to={"/"}  className="logo" onClick={()=>SetMobile(false)}>Gadgeto.</Link>
    </div>

    <div className={`try ${mobile ? "mobile-menu" : ""}`}  onClick={()=>SetMobile(false)} >
      {location.pathname === "/profile" ? (
        <Link className="icon" onClick={() => appear("logout")}>
          <FontAwesomeIcon icon={faRightFromBracket} onClick={logouts} className={activelink === "logout" ? "active" : ""} /> Logout
        </Link>
      ) : null}
      <Link to={"/like"} className="icon" onClick={() => appear("heart")}>
        <FontAwesomeIcon icon={faHeart} className={activelink === "heart" ? "active" : ""} /> 
      </Link>
      <Link to={"/shop"} className="icon" onClick={() => appear("cart")}>
        <FontAwesomeIcon icon={faBagShopping} className={activelink === "cart" ? "active" : ""} />
      </Link>
      <Link to={"/signup"}>
        <span className="icon" onClick={() => appear("signup")}>
          <b className={activelink === "signup" ? "active" : ""}>Signup</b>
        </span>
      </Link>
      <Link to={"/profile"} className="icon" onClick={() => appear("user")}>
        <FontAwesomeIcon icon={faUser} className={activelink === "user" ? "active" : ""} />
      </Link>
      <Link to={"/picker"} onClick={toggleTheme} className="icon">
        <FontAwesomeIcon icon={faCircleHalfStroke} />
      </Link>
    </div>

    <button className="mbl-menu-icon" onClick={()=>SetMobile(!mobile)}>
      {mobile ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faBars} />}
    </button>
   
    
  </nav>
  );
}

export default Nav;
