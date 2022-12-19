import React from 'react'
import { Layout } from '../layout/Layout'
import { Nxde } from './RoadMap/Nxde'
import { ServerX } from './RoadMap/ServerX'
import { Synx } from './RoadMap/Synx'

export const RoadMapDetail = () => {
  return (
    <div className='detailbg '>
      <Layout>
        <div className=''>
          <Synx/>
          <Nxde/>
          <ServerX/>
        </div>
      </Layout>
    </div>
  )
}
