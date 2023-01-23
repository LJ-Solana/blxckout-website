import React from 'react'
import icon1 from '../../../imgs/s1.png'
import icon2 from '../../../imgs/s2.png'
import icon3 from '../../../imgs/s3.png'
import { GoPrimitiveDot } from 'react-icons/go';
import lock from '../../../imgs/maskx.png'
import { Carousel, Col, Row } from 'react-bootstrap'
import gif from '../../../imgs/indexgif.gif'
const slide = [
  {
    title: "Insightful",
    des1: "Gaining feedback for products and services can be a long-winded process; setting up a questionnaire, waiting for responses, collating results." ,
    des2:"With Serve-X’s Discord command-based feedback function integration, gaining insight and responses has never been easier, allowing project owners to view and implement features more quickly and easily. This feedback process also allows users to request features and report any bugs.",
    vector: icon1,
  },
  {
    title: "Valuable",
    des1: "Time is money, especially when you are trying to juggle multiple tasks at once. This is why we decided to go back to basics to ensure processes can be completed efficiently. Serve-X can be solely controlled by the Discord command function.",
    des2:"Our “Giveaway” feature lets you run randomized competitions within Discord without a need for a third-party plugin or bot. this is especially useful when growing your NFT community or simply trying to keep them engaged. Serve-X also has NFT wallet collection management, saving you time and effort when you want to mass-collect wallets for whitelisting or airdrops.",
    vector: icon2,
  },
  {
    title: "Gaming",
    des1: "Serve-X also ha Discord football (soccer) betting functions, enabling your community to participate in wagers against each other." ,
    des2:"Users will be able to select the league that they wish to bet on as well as specific matches taking place. Bets can be placed in either Solana or selected SPL tokens.",
    vector: icon3,
  }
]
export const ServerX = ({innerRef}) => {
  
  return (
  <div className='centerContent text-white roadmapdetail' id='SERVEx'>
    <Row className='bannersx ecogif'>
        <Col md={6} xs={12} className="text-end-div order-sm-first order-lg-last order-md-last order-first"> 
          <img src={lock} alt="missing"  className='r1img'/>
        </Col>
        <Col md={6} xs={12} className="order-sm-last order-md-first order-last order-lg-first">
        <h1 className='fw-bold'>SERVE-X<span className='textPink'><GoPrimitiveDot/></span> </h1>
          <p className='mb-3'>SYNX is a revolutionary data storage application built on the Solana blockchain. Using GenesysGo's Shadow Drive, this new tech connects seamlessly to the blockchain, thus enabling your data to be owned, used and controlled by you.
          </p>
          <p>  Traditional storage methods use a single point of access and is stored one their own servers. SYNX gives you back full control of the most valuable commodity there is, your personal data.</p>
        </Col>
    </Row>
    <div className="mobileView text-white text-center">
          <Carousel>
            {slide.map((slides,index)=>{
              return(
                <Carousel.Item key={index}>
                <div className='bgmask4'>
                    <img src={slides.vector} alt="missing" />
                    <h5 className='blockh5'>{slides.title}</h5>
                    <p className='mb-3'>{slides.des1}</p>
                    <p>{slides.des2}</p>
                  </div>
              </Carousel.Item>
            )
          })}
        </Carousel>
      </div>
    <div className="nxdebg desktopView text-white">
        <Row>
          <Col md={4}>
            <div className="nxdeblock1 nxdeblock">
                <img src={icon1} alt="missing" />
                <section className='px-3'>
                  <h5 className='blockh5'>Insightful</h5>
                  <p className='mb-3'>Gaining feedback for products and services can be a long-winded process; setting up a questionnaire, waiting for responses, collating results. </p>
                  <p> With Serve-X’s Discord command-based feedback function integration, gaining insight and responses has never been easier, allowing project owners to view and implement features more quickly and easily. This feedback process also allows users to request features and report any bugs.</p>  
                </section>
            </div>
          </Col>
          <Col md={4}>
            <div className="nxdeblock2 nxdeblock">
                <img src={icon2} alt="missing" />
                <section className='px-3'>
                  <h5 className='blockh5'>Valuable</h5>
                  <p className='mb-3'> Time is money, especially when you are trying to juggle multiple tasks at once. This is why we decided to go back to basics to ensure processes can be completed efficiently. Serve-X can be solely controlled by the Discord command function.</p>
                  <p>Our “Giveaway” feature lets you run randomized competitions within Discord without a need for a third-party plugin or bot. this is especially useful when growing your NFT community or simply trying to keep them engaged. Serve-X also has NFT wallet collection management, saving you time and effort when you want to mass-collect wallets for whitelisting or airdrops.</p>
                </section>
            </div>
          </Col>
          <Col md={4}>
            <div className="nxdeblock3 nxdeblock">
                <img src={icon3} alt="missing" />
                <section className='px-3'>
                  <h5 className='blockh5'>Gaming</h5>
                  <p className='mb-3'> Serve-X also ha Discord football (soccer) betting functions, enabling your community to participate in wagers against each other.</p>
                  <p>Users will be able to select the league that they wish to bet on as well as specific matches taking place. Bets can be placed in either Solana or selected SPL tokens.</p>
                </section>
            </div>
          </Col>
        </Row>
        </div>
        <div className="gifx text-center">
          <a href="https://magiceden.io/marketplace/blxckout_">
            <img src={gif} alt="missing" />
          </a>
        </div>
    </div>
  )
}
