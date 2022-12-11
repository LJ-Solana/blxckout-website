import React from 'react'
import {Routes, Route} from 'react-router-dom';
import { Contact } from './components/Pages/Contact';
import { MainPage } from './components/Pages/MainPage';

export const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<MainPage/>} />   
        <Route path='/Contact' element={<Contact/>} />   
        {/* <Route path='/' element={<Header/>} />    */}
    </Routes>

  )
}
