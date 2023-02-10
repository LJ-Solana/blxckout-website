import React from 'react'
import {Routes, Route} from 'react-router-dom';
import { Contact } from './components/Pages/Contact';
import { MainPage } from './components/Pages/MainPage';
import { NFT } from './components/Pages/NFT/NFT';
import { RoadMapDetail } from './components/Pages/RoadMapDetail';

export const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<MainPage/>} />   
        <Route path='/Contact' element={<Contact/>} />   
        <Route path='/Products' element={<RoadMapDetail/>} />   
        <Route path='/NFT' element={<NFT/>} />   
    </Routes>

  )
}
