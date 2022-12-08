import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, NavLink } from "react-router-dom";
import { HiArrowUpRight } from 'react-icons/hi2';
import { ImArrowRight2 } from 'react-icons/im';
import twitter from '../../imgs/twitter.png'
import discord from '../../imgs/discord.png'
import messanger from '../../imgs/messanger.png'
import trello from '../../imgs/trello.png'

export const Footer = () => {
  return (
    <footer>
        <div className="centerContent">
            <Row className='newslettter'>
                <Col md={4} sm={6}>
                    <h2>Get blackout updates to your inbox</h2>
                    <p>Unsubscribe at any time 😇</p>
                </Col>
                <Col md={3}></Col>
                <Col md={5} sm={6}>
                    <div className="emailsub">
                        <input type="text" name="Email" placeholder='your email address' id="emailaddress" />
                        <button> <p >SUBMIT</p> <ImArrowRight2/> </button>
                    </div>
                </Col>
                </Row>
                <Row>
                <Col md={3} sm={6}>
                    <ul>
                        <h6 className='fw-bold'>Blackout</h6>
                        <li>About us</li>
                        <li>Roadmap</li>
                        <li>Markets</li>
                        <li>Go to App  <HiArrowUpRight/></li>
                    </ul>
                </Col>
                <Col md={5} sm={6}>
                    <ul>
                        <h6 className='fw-bold'>Resources</h6>
                        <li>Litepaper  <HiArrowUpRight/></li>
                        <li>Documentations  <HiArrowUpRight/></li>
                        <li>FAQ <HiArrowUpRight/></li>
                    </ul>
                </Col>
                <Col md={4} sm={12} className="text-end">
                    <ul className='socialIcons'>
                        <li> <img src={discord} alt="missing" /> </li>
                        <li> <img src={twitter} alt="missing" /> </li>
                        <li> <img src={messanger} alt="missing" /> </li>
                        <li> <img src={trello} alt="missing" /> </li>
                    </ul>
                    <small>2022 blackout ✽ All rights reserved.</small>
                </Col>
            </Row>
        </div>
    </footer>
  )
}
