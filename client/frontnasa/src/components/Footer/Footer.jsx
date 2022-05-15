import React, { useContext } from "react";
import { themeContext } from '../../context/themeContext';

const Footer = () => {

  const {theme } = useContext(themeContext) //hook context

  return <footer className={`footer${theme}`}>Welcome to
  NASA APP MERN, by Alberto Rodriguez &copy;</footer>;
};

export default Footer;
