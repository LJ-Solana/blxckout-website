import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { HiArrowUpRight } from 'react-icons/hi2';
import Bramah from '../../imgs/Bramah.png'
import KudelskiSecurity from '../../imgs/KudelskiSecurity.png'

export const AuditBy = () => {
  return (
    <div className='w-100 auditByCover'>
        <div className='centerContent auditBy'>
            <Row>
                <Col md={6} sm={12} className="dgrid">
                    <h1 className='fw-bold'>Need more help?</h1>
                    <button className='mt-3'>READ TAG  <HiArrowUpRight/></button>
                </Col>
                <Col md={3} sm={12} className="text-center">
                    <img src={Bramah} alt="missing" />    
                </Col>
                <Col md={3} sm={12}>
                    <img src={KudelskiSecurity} className="w-100" alt="missing" />
                </Col>
            </Row>
        </div>
    </div>
  )
}
