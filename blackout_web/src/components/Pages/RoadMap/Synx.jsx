import React from 'react'
import { Col, Row } from 'react-bootstrap'

export const Synx = () => {
  return (
    <>
        <Row className='text-white'>
            <Col md={6} xs={12} className="order-sm-last"> hello</Col>
            <Col md={6} xs={12} className="order-sm-first">@nd</Col>
        </Row>
    </>
  )
}
