import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import card from '../../../imgs/card.png'
// import { Button } from 'bootstrap';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import icon1 from '../../../imgs/nfticon1.png'
import icon2 from '../../../imgs/nfticon2.png'
import icon3 from '../../../imgs/nfticon3.png'

import { AiFillExclamationCircle } from 'react-icons/ai';
import { Col, Row } from 'react-bootstrap';
import { Layout } from '../../layout/Layout';

export const NFT = () => {
    var settings = {
        // dots: true,
        infinite: true,
      // autoplay: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1
      };
      var slideN = {
        // dots: true,
        infinite: false,
      autoplay: true,
        speed: 500,
        slidesToShow: 1.6,
        // arrows: false,
        slidesToScroll: 1,
        loop:true
      };
  return (
    <Layout>
      <div className='nftcenter text-white mt-4'>
           <Slider className='py-4' {...slideN}>
              <Row className='d-flex'>
                <Col md={6}>
                <img src={card} className="w-100" alt="missing" />
                </Col>
                <Col md={6}>
                    <div className=" ">
                      <h2 className="fw-bold">Blxckout Collection</h2>
                      <p className="f-14">Holders of a Blxckout NFT will be given benefits on all future products, services and collections.</p>
                    
                      <div className="socialnft">
                        <a href="#"><img src={icon1} alt="missing" /> 1.2k</a>
                        <a href="#"><img src={icon2} alt="missing" /> 1.2k</a>
                        <a href="#"><img src={icon3} alt="missing" /> </a>
                      </div>
                    </div>
                    <div className="w-80">
                      <div className="d-flex space-between ">
                          <div className="hash">
                            <span className='text-muted f-14'>Floor</span>
                            <p className="fw-bold height08 f-14 mb-2 textPink">4.1 ETH</p>
                          </div>
                          <div className="hash">
                            <span className='text-muted f-14'>Listed</span>
                            <p className="fw-bold height08 f-14 mb-2 textPink">156 </p>
                          </div>
                          <div className="hash">
                            <span className='text-muted f-14'>Total Vol</span>
                            <p className="fw-bold height08 f-14 mb-2 textPink">15.5K </p>
                          </div>
                        </div>
                        <div className="d-flex space-between ">
                          <div className="hash">
                            <span className='text-muted f-14'>Avg. Sale</span>
                            <p className="fw-bold height08 f-14 mb-2 textPink">4.32 (24H) </p>
                          </div>
                          <div className="hash">
                            <span className='text-muted f-14'>Owners</span>
                            <p className="fw-bold height08 f-14 mb-2 textPink">4,570 </p>
                          </div>
                          <div className="hash">
                            <span className='text-muted f-14'>Total supply</span>
                            <p className="fw-bold height08 f-14 mb-2 textPink">5.6K </p>
                          </div>
                        </div>
                    </div>
                </Col>
              </Row>
              {/* --- */}
              <Row className='d-flex'>
                <Col md={6}>
                <img src={card} className="w-100" alt="missing" />
                </Col>
                <Col md={6}>
                    <div className=" ">
                      <h2 className="fw-bold">Blxckout Collection</h2>
                      <p className="f-14">Holders of a Blxckout NFT will be given benefits on all future products, services and collections.</p>
                    
                      <div className="socialnft">
                        <a href="#"><img src={icon1} alt="missing" /> 1.2k</a>
                        <a href="#"><img src={icon2} alt="missing" /> 1.2k</a>
                        <a href="#"><img src={icon3} alt="missing" /> </a>
                      </div>
                    </div>
                    <div className="w-80">
                      <div className="d-flex space-between ">
                          <div className="hash">
                            <span className='text-muted f-14'>Floor</span>
                            <p className="fw-bold height08 f-14 mb-2 textPink">4.1 ETH</p>
                          </div>
                          <div className="hash">
                            <span className='text-muted f-14'>Listed</span>
                            <p className="fw-bold height08 f-14 mb-2 textPink">156 </p>
                          </div>
                          <div className="hash">
                            <span className='text-muted f-14'>Total Vol</span>
                            <p className="fw-bold height08 f-14 mb-2 textPink">15.5K </p>
                          </div>
                        </div>
                        <div className="d-flex space-between ">
                          <div className="hash">
                            <span className='text-muted f-14'>Avg. Sale</span>
                            <p className="fw-bold height08 f-14 mb-2 textPink">4.32 (24H) </p>
                          </div>
                          <div className="hash">
                            <span className='text-muted f-14'>Owners</span>
                            <p className="fw-bold height08 f-14 mb-2 textPink">4,570 </p>
                          </div>
                          <div className="hash">
                            <span className='text-muted f-14'>Total supply</span>
                            <p className="fw-bold height08 f-14 mb-2 textPink">5.6K </p>
                          </div>
                        </div>
                    </div>
                </Col>
              </Row>
              {/* --- */}
              <Row className='d-flex'>
                <Col md={6}>
                <img src={card} className="w-100" alt="missing" />
                </Col>
                <Col md={6}>
                    <div className=" ">
                      <h2 className="fw-bold">Blxckout Collection</h2>
                      <p className="f-14">Holders of a Blxckout NFT will be given benefits on all future products, services and collections.</p>
                    
                      <div className="socialnft">
                        <a href="#"><img src={icon1} alt="missing" /> 1.2k</a>
                        <a href="#"><img src={icon2} alt="missing" /> 1.2k</a>
                        <a href="#"><img src={icon3} alt="missing" /> </a>
                      </div>
                    </div>
                    <div className="w-80">
                      <div className="d-flex space-between ">
                          <div className="hash">
                            <span className='text-muted f-14'>Floor</span>
                            <p className="fw-bold height08 f-14 mb-2 textPink">4.1 ETH</p>
                          </div>
                          <div className="hash">
                            <span className='text-muted f-14'>Listed</span>
                            <p className="fw-bold height08 f-14 mb-2 textPink">156 </p>
                          </div>
                          <div className="hash">
                            <span className='text-muted f-14'>Total Vol</span>
                            <p className="fw-bold height08 f-14 mb-2 textPink">15.5K </p>
                          </div>
                        </div>
                        <div className="d-flex space-between ">
                          <div className="hash">
                            <span className='text-muted f-14'>Avg. Sale</span>
                            <p className="fw-bold height08 f-14 mb-2 textPink">4.32 (24H) </p>
                          </div>
                          <div className="hash">
                            <span className='text-muted f-14'>Owners</span>
                            <p className="fw-bold height08 f-14 mb-2 textPink">4,570 </p>
                          </div>
                          <div className="hash">
                            <span className='text-muted f-14'>Total supply</span>
                            <p className="fw-bold height08 f-14 mb-2 textPink">5.6K </p>
                          </div>
                        </div>
                    </div>
                </Col>
              </Row>
              {/* --- */}
            </Slider>
           <Slider className='py-5' {...slideN}>
              <Row className='d-flex'>
                <Col md={6}>
                <img src={card} className="w-100" alt="missing" />
                </Col>
                <Col md={6}>
                    <div className=" ">
                      <h2 className="fw-bold">Blxckout Collection</h2>
                      <p className="f-14">Holders of a Blxckout NFT will be given benefits on all future products, services and collections.</p>
                    
                      <div className="socialnft">
                        <a href="#"><img src={icon1} alt="missing" /> 1.2k</a>
                        <a href="#"><img src={icon2} alt="missing" /> 1.2k</a>
                        <a href="#"><img src={icon3} alt="missing" /> </a>
                      </div>
                    </div>
                    <div className="w-80">
                      <div className="d-flex space-between ">
                          <div className="hash">
                            <span className='text-muted f-14'>Floor</span>
                            <p className="fw-bold height08 f-14 mb-2 textPink">4.1 ETH</p>
                          </div>
                          <div className="hash">
                            <span className='text-muted f-14'>Listed</span>
                            <p className="fw-bold height08 f-14 mb-2 textPink">156 </p>
                          </div>
                          <div className="hash">
                            <span className='text-muted f-14'>Total Vol</span>
                            <p className="fw-bold height08 f-14 mb-2 textPink">15.5K </p>
                          </div>
                        </div>
                        <div className="d-flex space-between ">
                          <div className="hash">
                            <span className='text-muted f-14'>Avg. Sale</span>
                            <p className="fw-bold height08 f-14 mb-2 textPink">4.32 (24H) </p>
                          </div>
                          <div className="hash">
                            <span className='text-muted f-14'>Owners</span>
                            <p className="fw-bold height08 f-14 mb-2 textPink">4,570 </p>
                          </div>
                          <div className="hash">
                            <span className='text-muted f-14'>Total supply</span>
                            <p className="fw-bold height08 f-14 mb-2 textPink">5.6K </p>
                          </div>
                        </div>
                    </div>
                </Col>
              </Row>
              {/* --- */}
              <Row className='d-flex'>
                <Col md={6}>
                <img src={card} className="w-100" alt="missing" />
                </Col>
                <Col md={6}>
                    <div className=" ">
                      <h2 className="fw-bold">Blxckout Collection</h2>
                      <p className="f-14">Holders of a Blxckout NFT will be given benefits on all future products, services and collections.</p>
                    
                      <div className="socialnft">
                        <a href="#"><img src={icon1} alt="missing" /> 1.2k</a>
                        <a href="#"><img src={icon2} alt="missing" /> 1.2k</a>
                        <a href="#"><img src={icon3} alt="missing" /> </a>
                      </div>
                    </div>
                    <div className="w-80">
                      <div className="d-flex space-between ">
                          <div className="hash">
                            <span className='text-muted f-14'>Floor</span>
                            <p className="fw-bold height08 f-14 mb-2 textPink">4.1 ETH</p>
                          </div>
                          <div className="hash">
                            <span className='text-muted f-14'>Listed</span>
                            <p className="fw-bold height08 f-14 mb-2 textPink">156 </p>
                          </div>
                          <div className="hash">
                            <span className='text-muted f-14'>Total Vol</span>
                            <p className="fw-bold height08 f-14 mb-2 textPink">15.5K </p>
                          </div>
                        </div>
                        <div className="d-flex space-between ">
                          <div className="hash">
                            <span className='text-muted f-14'>Avg. Sale</span>
                            <p className="fw-bold height08 f-14 mb-2 textPink">4.32 (24H) </p>
                          </div>
                          <div className="hash">
                            <span className='text-muted f-14'>Owners</span>
                            <p className="fw-bold height08 f-14 mb-2 textPink">4,570 </p>
                          </div>
                          <div className="hash">
                            <span className='text-muted f-14'>Total supply</span>
                            <p className="fw-bold height08 f-14 mb-2 textPink">5.6K </p>
                          </div>
                        </div>
                    </div>
                </Col>
              </Row>
              {/* --- */}
              <Row className='d-flex'>
                <Col md={6}>
                <img src={card} className="w-100" alt="missing" />
                </Col>
                <Col md={6}>
                    <div className=" ">
                      <h2 className="fw-bold">Blxckout Collection</h2>
                      <p className="f-14">Holders of a Blxckout NFT will be given benefits on all future products, services and collections.</p>
                    
                      <div className="socialnft">
                        <a href="#"><img src={icon1} alt="missing" /> 1.2k</a>
                        <a href="#"><img src={icon2} alt="missing" /> 1.2k</a>
                        <a href="#"><img src={icon3} alt="missing" /> </a>
                      </div>
                    </div>
                    <div className="w-80">
                      <div className="d-flex space-between ">
                          <div className="hash">
                            <span className='text-muted f-14'>Floor</span>
                            <p className="fw-bold height08 f-14 mb-2 textPink">4.1 ETH</p>
                          </div>
                          <div className="hash">
                            <span className='text-muted f-14'>Listed</span>
                            <p className="fw-bold height08 f-14 mb-2 textPink">156 </p>
                          </div>
                          <div className="hash">
                            <span className='text-muted f-14'>Total Vol</span>
                            <p className="fw-bold height08 f-14 mb-2 textPink">15.5K </p>
                          </div>
                        </div>
                        <div className="d-flex space-between ">
                          <div className="hash">
                            <span className='text-muted f-14'>Avg. Sale</span>
                            <p className="fw-bold height08 f-14 mb-2 textPink">4.32 (24H) </p>
                          </div>
                          <div className="hash">
                            <span className='text-muted f-14'>Owners</span>
                            <p className="fw-bold height08 f-14 mb-2 textPink">4,570 </p>
                          </div>
                          <div className="hash">
                            <span className='text-muted f-14'>Total supply</span>
                            <p className="fw-bold height08 f-14 mb-2 textPink">5.6K </p>
                          </div>
                        </div>
                    </div>
                </Col>
              </Row>
              {/* --- */}
            </Slider>
      </div>
      <div className="text-white longslide">
        <div className="d-flex space-between centerContent mt-3">
          <h4 className="fw-bold">NFTs for Sales</h4>
          <button className='viewm'>VIEW MARKETPLACE</button>
        </div>
        <Slider {...settings}>
        <div>
          <img src={card} className="w-100" alt="missing" />
          <div className="d-flex pt-2 space-between ">
            <div className="hash">
              <span className='textPink'>#390 
                <OverlayTrigger
                  overlay={
                    <Tooltip id={`tooltip`}>
                      Tooltip on 
                    </Tooltip>
                  }
                >
                  <Button className='p-0 textPink ' variant=''><AiFillExclamationCircle/></Button>
                </OverlayTrigger>
              </span>
              <h6 className="fw-bold ">EVOL Blxckout</h6>
            </div>
            <button className="detailbtn">Details</button>
          </div>
          <div className="d-flex space-between ">
            <div className="hash">
              <span className='text-muted'>PRICE</span>
              <p className="fw-bold height08 f-14 mb-2">15 ETH</p>
            </div>
            <button className="buybtn">BUY NOW</button>
          </div>
        </div>
        {/* --- */}
        <div>
          <img src={card} className="w-100" alt="missing" />
          <div className="d-flex pt-2 space-between ">
            <div className="hash">
              <span className='textPink'>#390 
                <OverlayTrigger
                  overlay={
                    <Tooltip id={`tooltip`}>
                      Tooltip on 
                    </Tooltip>
                  }
                >
                  <Button className='p-0 textPink ' variant=''><AiFillExclamationCircle/></Button>
                </OverlayTrigger>
              </span>
              <h6 className="fw-bold ">EVOL Blxckout</h6>
            </div>
            <button className="detailbtn">Details</button>
          </div>
          <div className="d-flex space-between ">
            <div className="hash">
              <span className='text-muted'>PRICE</span>
              <p className="fw-bold height08 f-14 mb-2">15 ETH</p>
            </div>
            <button className="buybtn">BUY NOW</button>
          </div>
        </div>
        {/* --- */}
        <div>
          <img src={card} className="w-100" alt="missing" />
          <div className="d-flex pt-2 space-between ">
            <div className="hash">
              <span className='textPink'>#390 
                <OverlayTrigger
                  overlay={
                    <Tooltip id={`tooltip`}>
                      Tooltip on 
                    </Tooltip>
                  }
                >
                  <Button className='p-0 textPink ' variant=''><AiFillExclamationCircle/></Button>
                </OverlayTrigger>
              </span>
              <h6 className="fw-bold ">EVOL Blxckout</h6>
            </div>
            <button className="detailbtn">Details</button>
          </div>
          <div className="d-flex space-between ">
            <div className="hash">
              <span className='text-muted'>PRICE</span>
              <p className="fw-bold height08 f-14 mb-2">15 ETH</p>
            </div>
            <button className="buybtn">BUY NOW</button>
          </div>
        </div>
        {/* --- */}
        <div>
          <img src={card} className="w-100" alt="missing" />
          <div className="d-flex pt-2 space-between ">
            <div className="hash">
              <span className='textPink'>#390 
                <OverlayTrigger
                  overlay={
                    <Tooltip id={`tooltip`}>
                      Tooltip on 
                    </Tooltip>
                  }
                >
                  <Button className='p-0 textPink ' variant=''><AiFillExclamationCircle/></Button>
                </OverlayTrigger>
              </span>
              <h6 className="fw-bold ">EVOL Blxckout</h6>
            </div>
            <button className="detailbtn">Details</button>
          </div>
          <div className="d-flex space-between ">
            <div className="hash">
              <span className='text-muted'>PRICE</span>
              <p className="fw-bold height08 f-14 mb-2">15 ETH</p>
            </div>
            <button className="buybtn">BUY NOW</button>
          </div>
        </div>
        {/* --- */}
        <div>
          <img src={card} className="w-100" alt="missing" />
          <div className="d-flex pt-2 space-between ">
            <div className="hash">
              <span className='textPink'>#390 
                <OverlayTrigger
                  overlay={
                    <Tooltip id={`tooltip`}>
                      Tooltip on 
                    </Tooltip>
                  }
                >
                  <Button className='p-0 textPink ' variant=''><AiFillExclamationCircle/></Button>
                </OverlayTrigger>
              </span>
              <h6 className="fw-bold ">EVOL Blxckout</h6>
            </div>
            <button className="detailbtn">Details</button>
          </div>
          <div className="d-flex space-between ">
            <div className="hash">
              <span className='text-muted'>PRICE</span>
              <p className="fw-bold height08 f-14 mb-2">15 ETH</p>
            </div>
            <button className="buybtn">BUY NOW</button>
          </div>
        </div>
        {/* --- */}
        <div>
          <img src={card} className="w-100" alt="missing" />
          <div className="d-flex pt-2 space-between ">
            <div className="hash">
              <span className='textPink'>#390 
                <OverlayTrigger
                  overlay={
                    <Tooltip id={`tooltip`}>
                      Tooltip on 
                    </Tooltip>
                  }
                >
                  <Button className='p-0 textPink ' variant=''><AiFillExclamationCircle/></Button>
                </OverlayTrigger>
              </span>
              <h6 className="fw-bold ">EVOL Blxckout</h6>
            </div>
            <button className="detailbtn">Details</button>
          </div>
          <div className="d-flex space-between ">
            <div className="hash">
              <span className='text-muted'>PRICE</span>
              <p className="fw-bold height08 f-14 mb-2">15 ETH</p>
            </div>
            <button className="buybtn">BUY NOW</button>
          </div>
        </div>
        {/* --- */}
      </Slider>
      </div>  
    </Layout>
  )
}
