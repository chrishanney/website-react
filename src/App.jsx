import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import NavBar from './components/NavBar.jsx'
import Main from './components/Main.jsx'

function App() {

  return (
    <>
        <NavBar/>
        <Main className="main"/>
    </>
  )
}

export default App
