import React from 'react'
import logopoke from '../../assets/nasa.png'
import { Route,Routes } from 'react-router-dom'
import Home from './Home'
import Landings from './Landings'
import Neas from './Neas'


export default function Main() {

  return (
    <main>
    <img className='logoinicial' src={logopoke} alt="logopokemon" style={{width : 160}}/>
    <h1 className='welcome'> WELCOME TO THE NASA APP MERN</h1>
             
    <Routes>
       <Route element={<Home/>} path='/'/>
       <Route element={<Landings/>} path='/landings'/>
       <Route element={<Neas/>}  path='/neas'/>
       
    </Routes>
    
    </main>
  )
}


