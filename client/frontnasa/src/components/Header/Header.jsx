import React, {useContext} from "react";
import Nav from './Nav'
import Login from './Login'
import logo from '../../assets/nasa.png'
import { themeContext } from "../../context/themeContext";
import DarkModeToggle from "react-dark-mode-toggle";

const Header = () => {
   const { theme, toggleTheme } = useContext(themeContext); //hook context

  return  <header className={`header${theme}`}>
              <img src={logo} alt='logo' style={{width: 160}}></img>
              <Nav/>
              <div id="extras">
               <DarkModeToggle
                     onChange={toggleTheme}
                      checked={theme}
                     size={80}
                  />
               <Login/>
               </div>
              </header>;
};

export default Header;



