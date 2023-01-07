import React from 'react'
import blocks from "../../../imgs/blocks.png";
import { GoPrimitiveDot } from 'react-icons/go';
import icon1 from '../../../imgs/nicon1.png'
import icon2 from '../../../imgs/nicon2.png'
import icon3 from '../../../imgs/nicon3.png'
import download3 from '../../../imgs/download3.png'
import { Carousel, Col, Row } from 'react-bootstrap';
const slide = [
  {
    title: "Rocket-powered",
    des1: "The NXDE gives users access to 3 top-spec Solana RPC Nodes, located in the UK, the USA and Asia. Whenever you are in the world, connect seamlessly by choosing your closet node. With 1 TB of RAM on each node, we’re fully prepared for using them on mass." ,
    des2:"In essence, users of the nodes will be able to connect and communicate with the Solana blockchain quicker and run processes more easily due to our lightning-quick hardware",
    vector: icon1,
  },
  {
    title: "Functional",
    des1: "We’ve thought of everyone from the casual NFT trader to full-scale developers looking to create products like us. The NXDE facilitates easy access to send requests to and receive payloads from nodes on Solana’s network. Sending 1 transaction per second just isn’t going to cut it anymore." ,
    des2:"With the NXDE, you can run multiple meaning your chances of success are far greater when attempting to mint an NFT, sweep the floor for those hidden gems and build products and services on the blockchain. We essentially do all of the heavy lifting, instead of requiring you to be responsible for your own node infrastructure, which is a heavy cost in terms of time and money.",
    vector: icon2,
  },
  {
    title: "Convenient",
    des1: "Monthly subscriptions start to add up. That’s why we’ve decided to offer a one-off payment method for the use of our nodes. Simply purchase on of your NXDE NFTs and enjoy access for 1 year (individual cases of payment-only without an NFT may be possible)." ,
    des2:"We understand that everyone has to start somewhere and the blockchain can be a confusing place. With Discord whitelist IP connectivity, you can gain access as easy as 1-2-3. We’ve made the complicated bit easy.",
    vector: icon3,
  }
]
export const Nxde = ({innerRef}) => {
  return (
    <>
<<<<<<< HEAD
      <div className='text-center text-white roadmapdetail nxdex ' id='nxde'>
        <div className="bannerx ecogifn">
          <img src={blocks} alt="missing" />
          <h1 className='fw-bold py-2 mt-2'>NXDE<span className='textPink'><GoPrimitiveDot/></span> </h1>
          <div className="w-50-mbl m-auto">
            <p className='mb-3'>The NXDE (or NXDE) is Blxckout’s solution to long waiting times, failed minting attempts and slow transaction speeds on Solana.</p>
            <p> Nodes are expensive and time-consuming to maintain, which is why we’ve decided to take on the heavy lifting, allowing users to concentrate on what matters most, building on the blockchain and engaging with NFTs.</p>
          </div>
=======
      <div ref={innerRef} className='text-center text-white roadmapdetail nxdex' id='nxde'>
        <img src={blocks} alt="missing" />
        <h1 className='fw-bold py-2 mt-2'>NXDE<span className='textPink'><GoPrimitiveDot/></span> </h1>
        <div className="w-50-mbl m-auto">
          <p className='mb-3'>The NXDE (or NXDE) is Blxckout’s solution to long waiting times, failed minting attempts and slow transaction speeds on Solana.</p>
          <p> Nodes are expensive and time-consuming to maintain, which is why we’ve decided to take on the heavy lifting, allowing users to concentrate on what matters most, building on the blockchain and engaging with NFTs.</p>
>>>>>>> 5989e182b4e00e94300c735ee1b0de8840d06c16
        </div>
      </div>
      <div className="mobileView text-white w-80mbl text-center">
          <Carousel>
            {slide.map((slides,index)=>{
              return(
                <Carousel.Item key={index}>
                <div className='bgmask4'>
                    <img src={slides.vector} alt="missing" />
                    <h5 className='blockh5'>{slides.title}</h5>
                    <p className='mb-3'>{slides.des1}</p>
                    <p>{slides.des1}</p>
                  </div>
              </Carousel.Item>
            )
          })}
        </Carousel>
      </div>
      <div className="nxdebg text-white nxdeglow desktopView">
        <div className="centerContent">
          <Row>
            <Col md={4}>
              <div className="nxdeblock1 nxdeblock">
                  <img src={icon1} alt="missing" />
                  <section className='px-3'>
                    <h5 className='blockh5'>Rocket-powered</h5>
                    <p className='mb-3'>The NXDE gives users access to 3 top-spec Solana RPC Nodes, located in the UK, the USA and Asia. Whenever you are in the world, connect seamlessly by choosing your closet node. With 1 TB of RAM on each node, we’re fully prepared for using them on mass.</p>
                    <p> In essence, users of the nodes will be able to connect and communicate with the Solana blockchain quicker and run processes more easily due to our lightning-quick hardware .</p>
                  </section>
              </div>
            </Col>
            <Col md={4}>
              <div className="nxdeblock2 nxdeblock">
                  <img src={icon2} alt="missing" />
                  <section className='px-3'>
                    <h5 className='blockh5'>Functional</h5>
                    <p className='mb-3'> We’ve thought of everyone from the casual NFT trader to full-scale developers looking to create products like us. The NXDE facilitates easy access to send requests to and receive payloads from nodes on Solana’s network. Sending 1 transaction per second just isn’t going to cut it anymore.</p>
                    <p> With the NXDE, you can run multiple meaning your chances of success are far greater when attempting to mint an NFT, sweep the floor for those hidden gems and build products and services on the blockchain. We essentially do all of the heavy lifting, instead of requiring you to be responsible for your own node infrastructure, which is a heavy cost in terms of time and money.</p>
                  </section>
              </div>
            </Col>
            <Col md={4}>
              <div className="nxdeblock3 nxdeblock">
                  <img src={icon3} alt="missing" />
                  <section className='px-3'>
                    <h5 className='blockh5'>Convenient</h5>
                    <p className='mb-3'>Monthly subscriptions start to add up. That’s why we’ve decided to offer a one-off payment method for the use of our nodes. Simply purchase on of your NXDE NFTs and enjoy access for 1 year (individual cases of payment-only without an NFT may be possible).</p>
                    <p>We understand that everyone has to start somewhere and the blockchain can be a confusing place. With Discord whitelist IP connectivity, you can gain access as easy as 1-2-3. We’ve made the complicated bit easy.</p>
                  </section>
              </div>
            </Col>
          </Row>
          
          <Row className='downloadimg'>
            <Col md={6} className="textPink align-self-center"><h4 className='mb-0'>Get download now</h4></Col>
            <Col md={6} className="text-end">
              <img src={download3} alt="missing" />
            </Col>
          </Row>
          </div>
      </div>
    </>
  )
}
