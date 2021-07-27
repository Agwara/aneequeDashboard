import React, { useState, useEffect } from "react";
import {useHistory} from "react-router-dom";

import "./SideBar.css";

import overview from "../../assets/overview.svg";
import overviewActive from "../../assets/overviewActive.svg";
import report from "../../assets/report.svg";
import reportActive from "../../assets/reportActive.svg";
import bag from "../../assets/bag.svg";
import bagActive from "../../assets/bagActive.svg";
import settings from "../../assets/settings.svg";
import settingsActive from "../../assets/settingsActive.svg";
import users from "../../assets/users.svg";
import usersActive from "../../assets/usersActive.svg";
import location from "../../assets/location.svg";
import locationActive from "../../assets/locationActive.svg";

const SideBar = () => {
  const [activePage , setActivePage] = useState("/");
  const history = useHistory();

  useEffect(() => {
    setActivePage(history.location.pathname)
  }, [])

  const goToPage = (url) => {
    setActivePage(url)
    history.push(url)
  }


  return (
    <div className="sidebar">
      <div className="sidebar__logo" onClick={() => goToPage("/")}>
        <div className="sidebar__logo--img"></div>
        <p className="sidebar__logo--text">Tumbas</p>
      </div>
      
      <div className="sidebar-menu__list">
        <p className="primary-title">Menu</p>

        <ul className="sidebar--menu-list">
          <li 
            onClick={() => goToPage("/")} 
            className={activePage === "/" ? "menu-list--active menu-list--item" : "menu-list--default menu-list--item"}
          >
            {
              activePage === "/" ?
              <div className="activeBorder"></div> : ""
            }
            <img 
              alt=""
              src={activePage === "/" ? overviewActive : overview}
            />
            <p>Overview</p>
          </li>

          <li 
            onClick={() => goToPage("/orders")} 
            className={activePage === "/orders" ? "menu-list--active menu-list--item" : "menu-list--default menu-list--item"}
          >
            {
              activePage === "/orders" ?
              <div className="activeBorder"></div> : ""
            }
            <img 
              alt=""
              src={activePage === "/orders" ? reportActive : report}
            />
            <p>Orders</p>
          </li>

          <li 
            onClick={() => goToPage("/products")} 
            className={activePage === "/products" ? "menu-list--active menu-list--item" : "menu-list--default menu-list--item"}
          >
            {
              activePage === "/products" ?
              <div className="activeBorder"></div> : ""
            }
            <img 
              alt=""
              src={activePage === "/products" ? bagActive : bag}
            />
            <p>Products</p>
          </li>

          <li 
            onClick={() => goToPage("/settings")} 
            className={activePage === "/settings" ? "menu-list--active menu-list--item" : "menu-list--default menu-list--item"}
          >
            {
              activePage === "/settings" ?
              <div className="activeBorder"></div> : ""
            }
            <img 
              alt=""
              src={activePage === "/settings" ? settingsActive : settings}
            />
            <p>Settings</p>
          </li>
        </ul>

        <p className="primary-title">Business</p>
            
        <ul className="sidebar--menu-list">
          <li 
            onClick={() => goToPage("/location")} 
            className={activePage === "/location" ? "menu-list--active menu-list--item" : "menu-list--default menu-list--item"}
          >
            {
              activePage === "/location" ?
              <div className="activeBorder"></div> : ""
            }
            <img 
              alt=""
              src={activePage === "/location" ? locationActive : location}
              height="25"
              width="25"
            />
            <p>Shipment</p>
          </li>

          <li 
            onClick={() => goToPage("/employee")} 
            className={activePage === "/employee" ? "menu-list--active menu-list--item" : "menu-list--default menu-list--item"}
          >
            {
              activePage === "/employee" ?
              <div className="activeBorder"></div> : ""
            }
            <img 
              alt=""
              src={activePage === "/employee" ? usersActive : users}
              height="25"
              width="25"
            />
            <p>Employee</p>
          </li>
        </ul>
      </div>

      <div className="sidebar__footer">
        <p className="sidebar__footer--head">&copy; Tumbas 2020.</p>
        <span className="sidebar__footer--text">
          Platform for solution for all type of business to be more advanced.
        </span>
      </div>
    </div>
  )
}

export default SideBar;