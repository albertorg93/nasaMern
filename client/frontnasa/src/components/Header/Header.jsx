import React, {useContext, useState} from "react";
import Nav from './Nav'
import logo from '../../assets/nasa.png'
import { Button } from "@mui/material";
import { themeContext } from "../../context/themeContext";
import DarkModeToggle from "react-dark-mode-toggle";

const Header = () => {
   const { theme, toggleTheme } = useContext(themeContext); //hook context

  return  <header className={`header${theme}`}>
              <img src={logo} alt='logo' style={{width: 160}}></img>
              <Nav/>
               <DarkModeToggle
                     onChange={toggleTheme}
                      checked={theme}
                     size={80}
                  />
              </header>;
};

export default Header;



