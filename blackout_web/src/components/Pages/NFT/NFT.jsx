import { React, useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import card from '../../../imgs/card.png'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import icon1 from '../../../imgs/nfticon1.png'
import icon2 from '../../../imgs/nfticon2.png'
import icon3 from '../../../imgs/nfticon3.png'
import { AiFillExclamationCircle } from 'react-icons/ai';
import { Col, Row } from 'react-bootstrap';
import { Layout } from '../../layout/Layout';
import axios from 'axios';

const longslide =[
  {
    vector: card,
    hash: "12",
    title: "EVOL Blxckout",
    price: "15 ETH"
  },
  {
    vector: card,
    hash: "2",
    title: "EVOL Blxckout",
    price: "15 ETH"
  },
  {
    vector: card,
    hash: "3",
    title: "EVOL Blxckout",
    price: "15 ETH"
  },
  {
    vector: card,
    hash: "4",
    title: "EVOL Blxckout",
    price: "15 ETH"
  },
  {
    vector: card,
    hash: "5",
    title: "EVOL Blxckout",
    price: "15 ETH"
  },
  {
    vector: card,
    hash: "6",
    title: "EVOL Blxckout",
    price: "15 ETH"
  }
]

export const NFT = () => {
  
    var settings = {
        dots: false,
        infinite: true,
      // autoplay: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          }]
      };
      var slideN = {
        dots: false,
        infinite: false,
      // autoplay: true,
        speed: 500,
        slidesToShow: 1.6,
        // arrows: false,
        slidesToScroll: 1,
        loop:true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          }]
      };
      const BODY ={
        "condition": {
          "project_ids": [{"project_id": "DPzUdQES2X7QsauzzqHDVk6ttCqMrWHuuetK3JpTuKA4" }]
        }
      };
      // const HEADER = {
      //   "Authorization": eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJTeW54IiwibmFtZSI6Ikh5cGVyc3BhY2UiLCJpYXQiOiIxNTE2MjM5MDIyIn0.OzYzyS3LqoFTu3kodHF8xMGZ2S1simBasguIJEfpBbU
      // };
      useEffect(()=>{
        
        axios.post('https://beta.api.solanalysis.com/rest/get-market-place-snapshots', BODY, {
          header: {
            'Authorization':  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJTeW54IiwibmFtZSI6Ikh5cGVyc3BhY2UiLCJpYXQiOiIxNTE2MjM5MDIyIn0.OzYzyS3LqoFTu3kodHF8xMGZ2S1simBasguIJEfpBbU'
          }
        }).then(res=> console.log("hello" , res));
                
      },[])
  return (
    <div className="gifBg w-100">
      <div className="nftbg">
        <Layout>
          <div className="nftgif ecogif">
            <div className='nftcenter text-white mt-4 overflow-v'>
              <div className="headingnfts">
                <h1 className='abel'>Blxckout Collection</h1>
                <p className='abel fw-light'>Blxckout Genesis collection. The gateway into the 'X' ecosystem. Building blockchain-enabled products and services such as data storage & tooling, while providing a great UX on the journey through web 3.0</p>
              </div>
                  <Slider className='py-4' {...slideN}>
                      <Row className='d-flex'>
                        <Col md={5} sm={12}>
                        <img src={card} className="nfticon w-100" alt="missing" />
                        </Col>
                        <Col md={7} sm={12}>
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
                        <Col md={5} sm={12}>
                        <img src={card} className="nfticon w-100" alt="missing" />
                        </Col>
                        <Col md={7} sm={12}>
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
                        <Col md={5} sm={12}>
                        <img src={card} className="nfticon w-100" alt="missing" />
                        </Col>
                        <Col md={7} sm={12}>
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
                    
              <div className="headingnfts">
                <h1 className='abel'>NXDE Collection</h1>
                <p className='abel fw-light'>Access to 3 x top spec RPC nodes in a highly redundant setting for 1 year. No monthly subscription. Can be used for building Solana products, sniping and botting. A product from BLXCKOUT.</p>
              </div>
                  <Slider className='py-5' {...slideN}>
                      <Row className='d-flex'>
                        <Col md={5} sm={12}>
                        <img src={card} className="nfticon w-100" alt="missing" />
                        </Col>
                        <Col md={7} sm={12}>
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
                        <Col md={5} sm={12}>
                        <img src={card} className="nfticon w-100" alt="missing" />
                        </Col>
                        <Col md={7} sm={12}>
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
                        <Col md={5} sm={12}>
                        <img src={card} className="nfticon w-100" alt="missing" />
                        </Col>
                        <Col md={7} sm={12}>
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
          </div>
          {/* LONG SLIDE */}
          <div className="text-white longslide">
            <div className="d-flex space-between centerContent mt-3">
              <h4 className="fw-bold">Deals on NFTs</h4>
              <button className='viewm'>VIEW MARKETPLACE</button>
            </div>
            <Slider {...settings}>
              {longslide.map((nftslide,index)=>{
                return(
                  <div key={index}>
                    <img src={nftslide.vector} className="w-100" alt="missing" />
                    <div className="d-flex pt-2 space-between ">
                      <div className="hash">
                        <span className='textPink'>#{nftslide.hash} 
                          <OverlayTrigger overlay={
                              <Tooltip id={`tooltip`}> Tooltip on  </Tooltip>
                            }>
                            <Button className='p-0 textPink ' variant=''><AiFillExclamationCircle/></Button>
                          </OverlayTrigger>
                        </span>
                        <h6 className="fw-bold ">{nftslide.title}</h6>
                      </div>
                      <button className="detailbtn">Details</button>
                    </div>
                    <div className="d-flex space-between ">
                      <div className="hash">
                        <span className='text-muted'>PRICE</span>
                        <p className="fw-bold height08 f-14 mb-2">{nftslide.price}</p>
                      </div>
                      <button className="buybtn">BUY NOW</button>
                    </div>
                  </div>
                  )
                })}
          </Slider>
          </div> 
          <div className="viewM">
            <button>VIEW MARKETPLACE</button>
          </div>
          {/* LONGSLIDE ENDS  */}
          <div className="nftgif ecogif d-none">
            <div className='nftcenter text-white mt-2 '>
                  <Slider className='py-4' {...slideN}>
                      <Row className='d-flex'>
                        <Col md={5} sm={12}>
                        <img src={card} className="nfticon w-100" alt="missing" />
                        </Col>
                        <Col md={7} sm={12}>
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
                        <Col md={5} sm={12}>
                        <img src={card} className="nfticon w-100" alt="missing" />
                        </Col>
                        <Col md={7} sm={12}>
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
                        <Col md={5} sm={12}>
                        <img src={card} className="nfticon w-100" alt="missing" />
                        </Col>
                        <Col md={7} sm={12}>
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
                        <Col md={5} sm={12}>
                        <img src={card} className="nfticon w-100" alt="missing" />
                        </Col>
                        <Col md={7} sm={12}>
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
                        <Col md={5} sm={12}>
                        <img src={card} className="nfticon w-100" alt="missing" />
                        </Col>
                        <Col md={7} sm={12}>
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
                        <Col md={5} sm={12}>
                        <img src={card} className="nfticon w-100" alt="missing" />
                        </Col>
                        <Col md={7} sm={12}>
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
          </div>
          {/* LONG SLIDE */}
          <div className="text-white d-none longslide">
            <div className="d-flex space-between centerContent mt-3">
              <h4 className="fw-bold">NFTs for Sale</h4>
              <button className='viewm'>VIEW MARKETPLACE</button>
            </div>
            <Slider {...settings}>
              {longslide.map((nftslide,index)=>{
                return(
                  <div key={index}>
                    <img src={nftslide.vector} className="w-100" alt="missing" />
                    <div className="d-flex pt-2 space-between ">
                      <div className="hash">
                        <span className='textPink'>#{nftslide.hash} 
                          <OverlayTrigger overlay={
                              <Tooltip id={`tooltip`}> Tooltip on  </Tooltip>
                            }>
                            <Button className='p-0 textPink ' variant=''><AiFillExclamationCircle/></Button>
                          </OverlayTrigger>
                        </span>
                        <h6 className="fw-bold ">{nftslide.title}</h6>
                      </div>
                      <button className="detailbtn">Details</button>
                    </div>
                    <div className="d-flex space-between ">
                      <div className="hash">
                        <span className='text-muted'>PRICE</span>
                        <p className="fw-bold height08 f-14 mb-2">{nftslide.price}</p>
                      </div>
                      <button className="buybtn">BUY NOW</button>
                    </div>
                  </div>
                  )
                })}
          </Slider>
          </div> 
          {/* LONGSLIDE ENDS  */}
        </Layout>
      </div>
    </div>
  )
}
