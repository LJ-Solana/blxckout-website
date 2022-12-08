import React from 'react'
import { Col, Row } from 'react-bootstrap'
import lock from '../../imgs/lock.png'
import { GoPrimitiveDot } from 'react-icons/go';


export const Features = () => {
  return (
    <div className="centerContent py-4 mb-5">
        <div className='feature text-white'>
            <Row>
                <Col md={6}>
                    <h1 className='fw-bold'>SYNX<span className='textPink'><GoPrimitiveDot/></span> </h1>
                    <h4 className='textPink'>Your keys, your data.</h4>
                    <p className='feDes'>Synx will change the way you think about cloud data. Forever.</p>
                    <button><img src={lock} alt="missing" /> LEARN MORE</button>
                </Col>
            </Row>
        </div>
    </div>
  )
}
