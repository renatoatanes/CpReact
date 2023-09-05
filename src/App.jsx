import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom' 

import './App.css'
import { Outlet } from 'react-router-dom'
import Rodape from './Components/rodape'
import Menu from './Components/menu'

function App() {

  return ( 
  <>
    <Menu />
    <Outlet />
    <Rodape/>
  </>
  )
}

export default App