import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import './styles/styles.scss'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { useState } from 'react';
import {themeContext} from './context/themeContext';

function App() {
//para aplicar el modo noche, lo pasamos a traves de theme context
const [theme, setTheme] = useState("");
  const toggleTheme = () => theme===""?setTheme("-dark"):setTheme("");

  const themeData = {
    theme,
    toggleTheme
  }

  return (
    <div className="App">
      <themeContext.Provider value={themeData}>
      <BrowserRouter>
      <Header/>
      <Main/>
      </BrowserRouter>
      <Footer/>
      </themeContext.Provider>
    </div>
  )
}

export default App