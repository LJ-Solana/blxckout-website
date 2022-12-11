import React from 'react'
import { Layout } from '../layout/Layout'
import { About } from './About'
// import { AuditBy } from './AuditBy'
import { Banner } from './Banner'
import { RoadMap } from './RoadMap'

export const MainPage = () => {
  return (
    <div className="gifBg">
        <div className='bgmain'>
            <Layout>
                <Banner/>
                <About/>
                <RoadMap/>
            </Layout>
        </div> 
    </div>
  )
}
