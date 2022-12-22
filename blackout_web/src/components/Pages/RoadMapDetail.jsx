import React, { useRef, useEffect } from 'react'
import { Layout } from '../layout/Layout'
import { Nxde } from './RoadMap/Nxde'
import { ServerX } from './RoadMap/ServerX'
import { Synx } from './RoadMap/Synx'
import { useSearchParams } from "react-router-dom";

export const RoadMapDetail = () => {
  const synxRef = useRef(null)
  const nxdeRef = useRef(null)
  const SERVExRef = useRef(null)
  useEffect(()=>{ 
    window.onload = () => {
      const queryParams = new URLSearchParams(window.location.search)
      const section = queryParams.get("section")
      setTimeout(() => {
        if(section == "synx"){
          var element = document.getElementById("synx");
          element.scrollIntoView();
        } 
        if(section == "nxde"){
          var element = document.getElementById("nxde");
          element.scrollIntoView();
        }
        if(section == "SERVEx"){
          var element = document.getElementById("SERVEx");
          element.scrollIntoView();
        }
      }, 1000);
    }
  
  },[])  
 
 
  return (
    <div className='detailbg '>
      <Layout>
        <div className=''>
          <Synx innerRef={synxRef} />
          <Nxde innerRef={nxdeRef}/>
          <ServerX innerRef={SERVExRef}/>
        </div>
      </Layout>
    </div>
  )
}
