import React from 'react';
import gif from '../../imgs/indexgif.gif'
import { GoPrimitiveDot } from 'react-icons/go';

export const Banner = () => {
  return (
    <div className='banner text-white'>
        <div>
            <img src={gif} className="leftGif" alt="missing" />
            <p className='welcomTitle textPink'>Welcome to blackout</p>
            <h1 className='fw-bold'>Experience<span className='textPink'><GoPrimitiveDot/></span>  <br /> Utility<span className='textPink'><GoPrimitiveDot/></span> </h1>
            <p className='bannerText'>Building crucial blockchain-enabled <br /> products and services</p>
            <img src={gif} className="rightGif" alt="missing" />
        </div>
    </div>
  )
}
