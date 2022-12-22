import React from 'react'
import vector1 from '../../imgs/lock.png'
import vector2 from '../../imgs/roadvec2.png'
import vector3 from '../../imgs/roadvec3.png'
import icon1 from '../../imgs/lockicon.png'
import icon2 from '../../imgs/layers.png'
import icon3 from '../../imgs/maskicon.png'
import { GoPrimitiveDot } from 'react-icons/go';
import { NavLink } from 'react-router-dom'
// import { Synx } from './RoadMap/Synx'

const roadMap = [
  {
    title: "Synx",
    des: "Your keys, your data. " ,
    content:"Synx will change the way you think about cloud data. Forever.",
    vector: vector1,
    renderingclass: "roadmapicon1",
    icon: icon1,
    redirect: '/RoadMapDetail/#synx'
  },
  {
    title: "The NXDE",
    des: "Easy access, endless possibilities. " ,
    content:"The NXDE will make you a Solana powerhouse. Godspeed.",
    vector: vector2,
    renderingclass: "roadmapicon2",
    icon: icon2,
    redirect: '/RoadMapDetail/#nxde'
  },
  {
    title: "Serve-X",
    des: "All in one, one for all. " ,
    content:"Serving your Discord community needs",
    vector: vector3,
    renderingclass: "roadmapicon3",
    icon: icon3,
    redirect: '/RoadMapDetail/#SERVEx'
  }
]


export const RoadMap = () => {
  return (
    <div className="centerContent py-4 mb-5">
      {roadMap.map((roadMapData, index)=>{
        return(
           <div className='feature text-white' key={index}>
            <div className='b2'>
              <h1 className='fw-bold'>{roadMapData.title}<span className='textPink'><GoPrimitiveDot/></span> </h1>
              <h4 className='textPink'>{roadMapData.des}</h4>
              <p className='feDes'>{roadMapData.content}</p>
              <button><img src={roadMapData.vector} alt="missing" /> 
                <a href={roadMapData.redirect}>
                LEARN MORE
                </a></button>
              <img src={roadMapData.icon} className={roadMapData.renderingclass} alt="missing" />
            </div>
          </div>
        )
      })}
    </div>
  )
}
