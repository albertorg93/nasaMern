import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Home'
import Landings from './Landings'
import Neas from './Neas'
import Landlist from './Landlist'
import CreaLand from './CreaLand'
import CreaNeas from './CreaNeas'

export default function Main() {

  return (
    <main>
      
    <Routes>
       <Route element={<Home/>} path='/'/>
       <Route element={<Landings/>} path='/landings'/>
       <Route element={<Landlist/>} path='/landlist'/>
       <Route element={<CreaLand />} path="/createlanding"/>
       <Route element={<Neas/>}  path='/neas'/>
       <Route element={<CreaNeas />} path="/createneas"></Route>
       
    </Routes>
    
    </main>
  )
}


