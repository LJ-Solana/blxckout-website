import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Layout } from '../layout/Layout'
// import x from '../../imgs/x.png'
// import contactnet from '../../imgs/contactnet.png'
import icon1 from '../../imgs/contacticon1.png'
import icon2 from '../../imgs/contacticon2.png'
import icon3 from '../../imgs/contacticon3.png'
import icon4 from '../../imgs/contacticon4.png'
import Bramah from '../../imgs/Bramah.png'
import KudelskiSecurity from '../../imgs/KudelskiSecurity.png'
import gif from '../../imgs/animation.gif'
import { NavLink } from 'react-router-dom'


export const Contact = () => {
  return (
    <div className='contactnetbg'>
      <Layout>
        <div className=" contactUsContent my-2">
        <div className="centerContent position-relative text-white">
          <h1 className='fw-bold textCenterMbl'>Get in touch</h1>
          <h5 className='my-3 fw-bold textCenterMbl'>We are here for you! How can we help?</h5>
          <Row>
            <Col className='textCenterMbl' md={6} xs={12}>
              <form>
                <input type="text" className='w-100 formstyle' name="" id=""  placeholder='What is your full name ?'/> <br />
                <input type="text" className='w-100 formstyle' name="" id="" placeholder='What is email address ?' />  <br />
                <textarea className='w-100 formstyle' rows="4" placeholder='How can we help you ?'></textarea> <br />
                <button type="submit" className='text-white'>Submit</button>
              </form>
            </Col>
            <Col md={6} xs={12}>
              <ul className='links'>
                <Row>
                   <Col xs={2} md={1} className="px-0"> <img src={icon1} alt="missing" /> </Col>
                   <Col xs={10} md={11}> <NavLink to="/"> https://www.blxckout.xyz/</NavLink> </Col>
                   <Col xs={2} md={1} className="px-0"> <img src={icon2} alt="missing" /> </Col>
                   <Col xs={10} md={11}> <NavLink to="/"> Ij@blxckout.xyz, brood@blxckout.xyz</NavLink> </Col>
                   <Col xs={2} md={1} className="px-0"> <img src={icon3} alt="missing" /> </Col>
                   <Col xs={10} md={11}> <NavLink to="/"> blckout_nft-BLXCKOUT, synx_xyz-SERVE-X, TheNxde-The NXDE</NavLink> </Col>
                   <Col xs={2} md={1} className="px-0"> <img src={icon4} alt="missing" /> </Col>
                   <Col xs={10} md={11}> <NavLink to="/"> blxckout</NavLink> </Col>
                </Row>
              </ul>
              <ul className='contacticons text-center d-flex row'>
                <li className='col-12 col-md-4'> <h5 className='textPink'>Powered By</h5></li>
                <li className='col-6 col-md-4'><img src={KudelskiSecurity} alt="missing" /></li>
                <li className='col-6 col-md-4'><img className='contactlogo2' src={Bramah} alt="missing" /></li>
              </ul>
            </Col>
          </Row>
        </div>
        <div className='contactnet w-100'>
          {/* <img src={gif} alt="missing" /> */}
        </div>
        </div>
      </Layout>
    </div>
  )
}
