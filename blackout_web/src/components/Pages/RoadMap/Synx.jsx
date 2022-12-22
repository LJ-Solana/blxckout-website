import React from 'react'
import { Carousel, Col, Row } from 'react-bootstrap'
import lock from '../../../imgs/lockx.png'
import { GoPrimitiveDot } from 'react-icons/go';
import icon1 from '../../../imgs/micon1.png'
import icon2 from '../../../imgs/micon2.png'
import icon3 from '../../../imgs/micon3.png'
import icon4 from '../../../imgs/micon4.png'
import download1 from '../../../imgs/download1.png'
import download2 from '../../../imgs/download2.png'
import download3 from '../../../imgs/download3.png'

const slide = [
  {
    title: "Secure",
    des1: "Securing your date is out top priority. Using Authy’s two factor authentication along with your very own seed-phrase there is no need to worry about the safety of your data. Simply store your seed-phrase safely and never worry again about losing important photos, documents and files." ,
    des2:"The only person that can EVER access your data is you. We couldn’t access it even if we wanted to.If a traditional storage system incurs a security breach, your data is on the line. With SNYX, this is physically impossible.",
    vector: icon1,
  },
  {
    title: "Innovative",
    des1: " Never-seen-before technology that will change the data storage industry forever. Gone are the days of replying on big corporate technology companies to safely store your data. We are giving full ownership, control and power back to its rightful owner, YOU." ,
    des2:"Our “Freeze” functionality also lets you save important files that can NEVER be deleted, as well as immutable and time-stamped records to give you full peace of mind.",
    vector: icon2,
  },
  {
    title: "Organized ",
    des1: "Our “Vaults” are our “Folders”, because they really are as safe as bank vaults. For you organized folk, you can create, name and choose different storage sized for multiple vaults. Or, simply create 1 large vault to store everything from work documents to family photos. " ,
    des2:"Freezing a vault will keep it on the blockchain forever, allowing you to bulk-save all of your files for the future. You are also able to take a picture or scan a document directly in the app to save you time and the effort of doing this externally.",
    vector: icon3,
  },
  {
    title: " Generous",
    des1: "Unlike typical storage companies, we don’t offer monthly subscriptions. Instead, simply top up your in-app wallet with Solana and $SHDW and purchase a vault, choosing exactly the right amount of storage that you require. Our pricing is extremely competitive and in-line with competitors, just with heaps of additional benefits. " ,
    des2:"We hope our generosity matches your and we fully understand the importance of collaborating. Share files with colleagues, friends and family for those crucial work deadlines and family selfies. Or, if you prefer to share wider, post directly to Twitter from the app.",
    vector: icon4,
  },
]
export const Synx = ({innerRef}) => {
  return (
    <div ref={innerRef} className='centerContent text-white roadmapdetail' id='synx'>
    <Row className='bannerx'>
        <Col md={6} xs={12} className="text-end-div order-sm-first order-lg-last order-md-last order-first"> 
          <img src={lock} alt="missing"  className='r1img'/>
        </Col>
        <Col md={6} xs={12} className="order-sm-last order-md-first order-last order-lg-first">
        <h1 className='fw-bold'>SYNX<span className='textPink'><GoPrimitiveDot/></span> </h1>
          <p className='mb-3'>SYNX is a revolutionary data storage application built on the Solana blockchain. Using GenesysGo's Shadow Drive, this new tech connects seamlessly to the blockchain, thus enabling your data to be owned, used and controlled by you.
          </p>
          <p> Traditional storage methods use a single point of access and is stored one their own servers. SYNX gives you back full control of the most valuable commodity there is, your personal data.</p>
        </Col>
    </Row>
      <div className="mobileView text-center">
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
    <div className="desktopView">
        <Row className='bgmask'>
            <Col md={4}>
              <div className='bgmask1'>
                <img src={icon1} alt="missing" />
                <h5 className='blockh5'>Secure</h5>
                <p className='mb-3'>Securing your date is out top priority. Using Authy’s two factor authentication along with your very own seed-phrase there is no need to worry about the safety of your data. Simply store your seed-phrase safely and never worry again about losing important photos, documents and files.</p>
                <p> The only person that can EVER access your data is you. We couldn’t access it even if we wanted to.If a traditional storage system incurs a security breach, your data is on the line. With SNYX, this is physically impossible.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className='bgmask2'>
                <img src={icon2} alt="missing" />
                <h5 className='blockh5'>Innovative</h5>
                <p className='mb-3'>
                Never-seen-before technology that will change the data storage industry forever. Gone are the days of replying on big corporate technology companies to safely store your data. We are giving full ownership, control and power back to its rightful owner, YOU.</p>
                <p> Our “Freeze” functionality also lets you save important files that can NEVER be deleted, as well as immutable and time-stamped records to give you full peace of mind.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className='bgmask3'>
                <img src={icon3} alt="missing" />
                <h5 className='blockh5'>Organized</h5>
                <p className='mb-3'>Our “Vaults” are our “Folders”, because they really are as safe as bank vaults. For you organized folk, you can create, name and choose different storage sized for multiple vaults. Or, simply create 1 large vault to store everything from work documents to family photos.</p>
                <p>Freezing a vault will keep it on the blockchain forever, allowing you to bulk-save all of your files for the future. You are also able to take a picture or scan a document directly in the app to save you time and the effort of doing this externally.</p>
               </div>
            </Col>
            <Col md={12}>
              <div className='bgmask4'>
                <Row>
                  <Col md={2}>
                      <img src={icon4} alt="missing" />
                  </Col>
                  <Col md={10}>
                      <h5 className='blockh5'>Generous</h5>
                      <p className='mb-3'>Unlike typical storage companies, we don’t offer monthly subscriptions. Instead, simply top up your in-app wallet with Solana and $SHDW and purchase a vault, choosing exactly the right amount of storage that you require. Our pricing is extremely competitive and in-line with competitors, just with heaps of additional benefits.</p>
                      <p> We hope our generosity matches your and we fully understand the importance of collaborating. Share files with colleagues, friends and family for those crucial work deadlines and family selfies. Or, if you prefer to share wider, post directly to Twitter from the app.</p>
                  </Col>
                </Row>
               </div>
            </Col>
        </Row>
        <Row className='downloadimg'>
          <Col md={6} className="textPink align-self-center"><h4 className='mb-0'>Get download now</h4></Col>
          <Col md={6} className="text-end">
            <img src={download1} alt="missing" />
            <img src={download2} alt="missing" />
            <img src={download3} alt="missing" />
          </Col>
        </Row>
    </div>
    </div>
  )
}
