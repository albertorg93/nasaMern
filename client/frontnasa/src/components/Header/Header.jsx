import React, {useContext} from "react";
import Nav from './Nav'
import logo from '../../assets/nasa.png'
import { Button } from "@mui/material";
import { themeContext } from "../../context/themeContext";

const Header = () => {
   const { theme, toggleTheme } = useContext(themeContext); //hook context

  return  <header className={`header${theme}`}>
              <img src={logo} alt='logo' style={{width: 160}}></img>
              <Nav/>
              <Button variant="contained" color="secondary" onClick={toggleTheme}>
               Night mode
              </Button>
              </header>;
};

export default Header;



