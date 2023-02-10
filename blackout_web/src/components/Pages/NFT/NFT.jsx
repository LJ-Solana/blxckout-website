import { Children, React, useEffect, useState } from 'react'
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
import axios from 'axios'
import { useCallback } from 'react';

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
        var DealsSettings = {
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
              dots: false
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
   

     const [blxckout_data_arr, setBlxckout_data_arr] = useState([])
     const [nxde_data_arr, setNxde_data_arr] = useState([])
  
    
      useEffect(()=>{
        getBlxckoutData();
        getNxdeData();
      },[])
  const getBlxckoutData = () => {
    axios.get(`https://api.mp.blxckout.xyz/get-blxckout-snapshots`, {
      withCredentials: false,
      headers: {
        'Accept': 'application/json',
      }
    }
    )
      .then(({ data }) => {
        // console.log("get-market-place-snapshot => ", data.market_place_snapshots)

        setBlxckout_data_arr(data.market_place_snapshots.slice(0, 20))
      })
      .catch(function (error) {
        console.log(error)
      });
  }
  const getNxdeData = () => {
    axios.get(`https://api.mp.blxckout.xyz/get-nxde-snapshots`, {
      withCredentials: false,
      headers: {
        'Accept': 'application/json',
      }
    }
    )
      .then(({ data }) => {
        // console.log("get-NXDE-snapshot => ", data.market_place_snapshots)
        setNxde_data_arr(data.market_place_snapshots.slice(0, 20))
      })
      .catch(function (error) {
        console.log(error)
      });
  }
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
             {blxckout_data_arr.length > 0 &&    <Slider className='py-4' {...slideN}>
                   {Children.toArray(blxckout_data_arr.map((post)=> {
                      const { name , meta_data_img, attributes } = post; 
                      return(
                        <Row className='d-flex'>
                            <Col md={5} sm={12}>
                            <img src={meta_data_img} className="nfticon w-100" alt="missing" />
                            </Col>
                            <Col md={7} sm={12}>
                                <div className=" ">
                                  <h2 className="fw-bold">{name}</h2>
                                  <p className="f-14">Holders of a Blxckout NFT will be given benefits on all future products, services and collections.</p>
                                <div className="socialnft">
                                  <div className="hash">
                                      <span className='text-muted f-14'>Price</span>
                                      <p className="fw-bold height01 f-14 mb-2 textPink">{post.lowest_listing_mpa.price} SOL</p>
                                    </div>
                                    <button>Buy Now</button>
                                  </div>
                                </div>
                                <div className="w-95">
                                  <div className="slidercontent">
                                   {
                Object.entries(post.attributes).map(([key, val]) => 
                <div key={key} className="hash">
                                      <span className='text-muted f-14'>{key}</span>
                                      <p className="fw-bold height01 f-14 mb-2 textPink">{val}</p>
                                    </div>
                )
            }
                                    {/* {Children.toArray(attributes.map(trait => (
                                      <div className="hash">
                                      <span className='text-muted f-14'>{trait.trait_type}</span>
                                      <p className="fw-bold height01 f-14 mb-2 textPink">{trait.value}</p>
                                    </div>
                                    )))} */}
                                    </div>
                                </div>
                            </Col>
                          </Row>
                      )
                       } ))}
                   </Slider>}
               
                    
              <div className="headingnfts">
                <h1 className='abel'>NXDE Collection</h1>
                <p className='abel fw-light'>Access to 3 x top spec RPC nodes in a highly redundant setting for 1 year. No monthly subscription. Can be used for building Solana products, sniping and botting. A product from BLXCKOUT.</p>
              </div>
              {nxde_data_arr.length > 0 && 
                <Slider className='py-5' {...slideN}>
                  {Children.toArray(nxde_data_arr.map((post)=> {
                    const { name , meta_data_img, attributes } = post; 
                    return(
                      <Row className='d-flex'>
                        <Col md={5} sm={12}>
                        <img src={meta_data_img} className="nfticon w-100" alt="missing" />
                        </Col>
                        <Col md={7} sm={12}>
                            <div className=" ">
                              <h2 className="fw-bold">{name}</h2>
                              <p className="f-14">Holders of a Blxckout NFT will be given benefits on all future products, services and collections.</p>
                              <div className="socialnft">
                                  <div className="hash">
                                      <span className='text-muted f-14'>Price</span>
                                      <p className="fw-bold height01 f-14 mb-2 textPink">{post.lowest_listing_mpa.price} SOL</p>
                                    </div>
                                    <button>Buy Now</button>
                                  </div>
                                </div>
                                <div className="w-95">
                                  <div className="slidercontent">
                                  { post.attributes &&
                Object.entries(post.attributes).map(([key, val]) => 
                <div key={key} className="hash">
                                      <span className='text-muted f-14'>{key}</span>
                                      <p className="fw-bold height01 f-14 mb-2 textPink">{val}</p>
                                    </div>
                )
            }
                                    </div>
                                </div>
                        </Col>
                      </Row>
                  )
                  }))}
                    </Slider>
                    }
                
              </div>
          </div>
          {/* LONG SLIDE */}
          <div className="text-white longslide">
            <div className="d-flex space-between centerContent mt-3">
              <h4 className="fw-bold">Deals on NFTs</h4>
              <button className='viewm'>VIEW MARKETPLACE</button>
            </div>
            <Slider {...DealsSettings}>
                 {Children.toArray([...blxckout_data_arr,...nxde_data_arr].sort(() => Math.random() - 0.5).map((post)=> {
                  const { name , meta_data_img, project_name } = post; 
                  return(
                  <div>
                    <img src={meta_data_img} className="w-100" alt="missing" />
                    <div className="d-flex pt-2 space-between ">
                      <div className="hash">
                        {/* <span className='textPink'>{name} 
                          <OverlayTrigger overlay={
                              <Tooltip id={`tooltip`}> Tooltip on  </Tooltip>
                            }>
                            <Button className='p-0 textPink ' variant=''><AiFillExclamationCircle/></Button>
                          </OverlayTrigger>
                        </span> */}
                        <h6 className="fw-bold ">{project_name == "BLXCKOUT" ? project_name : "The NXDE"}</h6>
                      </div>
                      <button className="detailbtn">Details</button>
                    </div>
                    <div className="d-flex space-between ">
                      <div className="hash">
                        <span className='text-muted'>PRICE</span>
                        <p className="fw-bold height08 f-14 mb-2">{parseFloat(post.lowest_listing_mpa.price).toFixed(1)} SOL</p>
                      </div>
                      <button className="buybtn">BUY NOW</button>
                    </div>
                  </div>
                  )
                })) }
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
