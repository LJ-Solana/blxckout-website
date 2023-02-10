import React, { useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { Link, NavLink } from "react-router-dom";
import { HiArrowUpRight } from 'react-icons/hi2';
import { ImArrowRight2 } from 'react-icons/im';
import twitter from '../../imgs/twitter.png'
import discord from '../../imgs/discord.png'
import messanger from '../../imgs/messanger.png'
import trello from '../../imgs/trello.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../imgs/logo.png'
import solanalogo from '../../imgs/solanaLogo.png'
import gengologo from '../../imgs/genesysgo_white.png'
import {useLocation, useNavigate} from 'react-router-dom';
// import { HiArrowUpRight } from 'react-icons/hi2';
import Bramah from '../../imgs/Bramah.png'
import KudelskiSecurity from '../../imgs/KudelskiSecurity.png'

export const Layout = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
  
    useEffect(() => {
      }, []);
    const goToTop = () => {
        if(location.pathname != "/"){
            window.location.replace('/');
        }else{
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
     
    };
  return (
    <div>
        {
            !props.hideHeader && 
            <div className='headerbar centerContent'>
            <Navbar expand="lg">
              <Container>
                <Navbar.Brand href="/" className='d-none-mbl'><img src={logo} alt="missing" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand href="/" className='d-none-desktop'><img src={logo} alt="missing" /></Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto">
                    <Nav.Link href="javascript:void(0)" onClick={() => navigate("/")}>Home</Nav.Link>
                    <Nav.Link href="javascript:void(0)" onClick={() => navigate("/Products")}>Product</Nav.Link>
                    <Nav.Link href="javascript:void(0)" onClick={() => navigate("/NFT")}>NFT</Nav.Link>
                    {/* <Nav.Link href="#home">Adopt</Nav.Link> */}
                    <Nav.Link href="javascript:void(0)" onClick={() => navigate("/Contact")}>Contact Us</Nav.Link>
                    <Nav.Link href="#link" className='wallet'>Connect wallet</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        }
        {props.children}
        {
            !props.hideFooter &&
        <>
            <div className='w-100 auditByCover'>
                <div className='centerContent auditBy'>
                    <Row>
                        <Col md={6} xs={12} className="dgrid">
                            <h1 className='fw-bold'>Need more help?</h1>
                            <a href="https://blxckout.gitbook.io/synx">
                            <button className='mt-3 fw-bold'>Read FAQ  <HiArrowUpRight/></button>
            </a>
                           
                        </Col>
                        <Col md={3} xs={12} className="text-center align-self-center">
                            <img style={{width:"100%"}} src={solanalogo} className="auditLogo1" alt="missing" />    
                        </Col>
                        <Col md={3} xs={12} className="align-self-center">
                            <img style={{width:"100%"}} src={gengologo} className="KudelskiSecurity" alt="missing" />
                        </Col>
                    </Row>
                </div>
                </div>
            <footer>
                <div className="centerContent">
                    <Row className='newslettter'>
                        <Col md={4} xs={12}>
                            <h2>Get blackout updates to your inbox</h2>
                            <p>Unsubscribe at any time 😇</p>
                        </Col>
                        <Col md={3}></Col>
                        <Col md={5} xs={12}>
                            <div className="emailsub">
                                <input type="text" name="user_email" placeholder='Your Email Address' id="emailaddress" autoComplete='false' aria-autocomplete='none' />
                                <button> <p >SUBMIT</p> <ImArrowRight2/> </button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3} sm={6} xs={6}>
                            <ul>
                                <h6 className='fw-bold'>Blackout</h6>
                                <li style={{cursor:"pointer"}} onClick={() => goToTop()}>About us</li>
                                {/* <li>Roadmap</li> */}
                                <li> <a href="/Products">Roadmap</a></li>
                                <li> <a href="https://hyperspace.xyz/collection/5Ts39fU956Z8PUtDYHQHLYZJa2Yvi97k7xVSFh6WfVf"> Markets</a></li>
                                {/* <li>Go to App  <HiArrowUpRight/></li> */}
                            </ul>
                        </Col>
                        <Col md={5} sm={6} xs={6}>
                            <ul>
                                <h6 className='fw-bold'>Resources</h6>
                                <li>Litepaper  <HiArrowUpRight/></li>
                                <li> <a href="https://docs.blxckout.xyz">Documentations  <HiArrowUpRight/> </a> </li>
                                <li>
                                <a href="https://blxckout.gitbook.io/synx">
                                FAQ <HiArrowUpRight/>
                                </a>
                                </li>
                            </ul>
                        </Col>
                        <Col md={4} sm={12} xs={12} className="socialiconsend">
                            <ul className='socialIcons'>
                                <li> <a href="https://discord.gg/blxckout"> <img src={discord} alt="missing" /> </a></li>
                                <li> <a href="https://twitter.com/blxckout_nft"> <img src={twitter} alt="missing" /> </a></li>
                                {/* <li> <img src={messanger} alt="missing" /> </li>
                                <li> <img src={trello} alt="missing" /> </li> */}
                            </ul>
                            <p>2022 blackout ✽ All rights reserved.</p>
                        </Col>
                    </Row>
                </div>
            </footer>
        </>
    }
    </div>
  )
}
