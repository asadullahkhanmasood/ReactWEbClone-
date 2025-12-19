import { useState } from 'react'
import './App.css'
import SideBar from './components/SideBar/SideBar'
import React from 'react'
import MainBody from './components/MainBody/MainBody'
function App() {

  return (
    <>
<section className='flex relative '>
     <SideBar/>
  <MainBody/>
  
  </section>     
    </>
  )
}

export default App
