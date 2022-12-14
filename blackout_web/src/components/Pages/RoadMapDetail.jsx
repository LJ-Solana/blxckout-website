import React from 'react'
import { Layout } from '../layout/Layout'
import { Nxde } from './RoadMap/Nxde'
import { ServerX } from './RoadMap/ServerX'
import { Synx } from './RoadMap/Synx'

export const RoadMapDetail = () => {
  return (
    <div>
      <Layout>
        <Synx/>
        <Nxde/>
        <ServerX/>
      </Layout>
    </div>
  )
}
