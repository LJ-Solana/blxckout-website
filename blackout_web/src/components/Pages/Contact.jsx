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
import { NavLink } from 'react-router-dom'


export const Contact = () => {
  return (
    <div className='contactnetbg'>
      <Layout>
        <div className=" contactUsContent my-2">
        <div className="centerContent position-relative text-white">
          <h1 className='fw-bold'>Get in touch</h1>
          <h5 className='my-3 fw-bold'>We are here for you! How can we help?</h5>
          <Row>
            <Col md={6} xs={12}>
              <form>
                <input type="text" className='w-100 formstyle' name="" id=""  placeholder='What is your full name ?'/> <br />
                <input type="text" className='w-100 formstyle' name="" id="" placeholder='What is email address ?' />  <br />
                <textarea className='w-100 formstyle' rows="4" placeholder='How can we help you ?'></textarea> <br />
                <button type="submit" className='text-white'>Submit</button>
              </form>
            </Col>
            <Col md={6} xs={12}>
              <ul className='links'>
                <li><img src={icon1} alt="missing" /> <NavLink to="/"> https://www.blxckout.xyz/</NavLink> </li>
                <li><img src={icon2} alt="missing" /><NavLink> Ij@blxckout.xyz, brood@blxckout.xyz</NavLink></li>
                <li><img src={icon3} alt="missing" /><NavLink> blckout_nft-BLXCKOUT, synx_xyz-SERVE-X, TheNxde-The NXDE</NavLink></li>
                <li><img src={icon4} alt="missing" /> <NavLink> blxckout</NavLink> </li>
              </ul>
              <ul className='contacticons text-center d-flex'>
                <li> <h5 className='textPink'>Powered By</h5></li>
                <li><img src={KudelskiSecurity} alt="missing" /></li>
                <li><img src={Bramah} alt="missing" /></li>
              </ul>
            </Col>
          </Row>
        </div>
        <div className='contactnet w-100'></div>
        </div>
      </Layout>
    </div>
  )
}
