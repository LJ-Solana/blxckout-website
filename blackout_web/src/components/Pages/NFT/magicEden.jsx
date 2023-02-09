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

export const MagicEden = () => {
  
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
// <<<<<<< HEAD
//       const BODY ={
//         "condition": {
//           "project_ids": [{"project_id": "DPzUdQES2X7QsauzzqHDVk6ttCqMrWHuuetK3JpTuKA4" }]
//         }
//       };
      // const HEADER = {
      //   "Authorization": eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJTeW54IiwibmFtZSI6Ikh5cGVyc3BhY2UiLCJpYXQiOiIxNTE2MjM5MDIyIn0.OzYzyS3LqoFTu3kodHF8xMGZ2S1simBasguIJEfpBbU
      // };
      // useEffect(()=>{

      //   axios.post('https://beta.api.solanalysis.com/rest/get-market-place-snapshots', BODY, {
      //     header: {
      //       'Authorization':  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJTeW54IiwibmFtZSI6Ikh5cGVyc3BhY2UiLCJpYXQiOiIxNTE2MjM5MDIyIn0.OzYzyS3LqoFTu3kodHF8xMGZ2S1simBasguIJEfpBbU'
      //     }
      //   }).then(res=> console.log("hello" , res));
                
      // },[])
//       useEffect(() => {
//         var data = JSON.stringify({
//           "condition": {
//             "project_ids": [
//               {
//                 "project_id": "DPzUdQES2X7QsauzzqHDVk6ttCqMrWHuuetK3JpTuKA4"
//               }
//             ]
//           }
//         });
//         var config = {
//           method: 'post',
//           proxy: {
//             protocol: 'https',
//           },
//           // httpsAgent: new https.Agent({ keepAlive: true }),
//           url: 'https://beta.api.solanalysis.com/rest/get-market-place-snapshots',
//           headers: { 
//             'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJTeW54IiwibmFtZSI6Ikh5cGVyc3BhY2UiLCJpYXQiOiIxNTE2MjM5MDIyIn0.OzYzyS3LqoFTu3kodHF8xMGZ2S1simBasguIJEfpBbU', 
//             'Content-Type': 'application/json'
//           },
//           data : data
//         };
//         axios(config)
//         .then(function (response) {
//           console.log(JSON.stringify(response.data));
//         })
//         .catch(function (error) {
//           debugger
//           console.log(error);
//         });
//       }, [])   
// =======
     
      var BODY = JSON.stringify({
        "query": {
                 "firstVerifiedCreators": ["DPzUdQES2X7QsauzzqHDVk6ttCqMrWHuuetK3JpTuKA4"]
             }
     });
     const [slideData, setslideData] = useState({
      NXDE: [],
      BLXCKOUT: [],
      RANDOM: []
     })
     const [blxckout_data_arr, setBlxckout_data_arr] = useState([])
     const [nxde_data_arr, setNxde_data_arr] = useState([])
     
    //  const _init = useCallback(async () => {
    //   const addresses = [
    //     "AZ8rz9BgFdVyqoetPRUJdhtQKDTsg7Q7tUyHE9G6bnuR",
    //     "E6XzSLwMDQH6uH6QkYVnneUBU21nAPqcKReepQHgWt4F"
    //   ]
    //   // addresses:
    //   // NXDE: AZ8rz9BgFdVyqoetPRUJdhtQKDTsg7Q7tUyHE9G6bnuR
    //   // BLXCKOUT: E6XzSLwMDQH6uH6QkYVnneUBU21nAPqcKReepQHgWt4F
    //   const requests = []

    //   addresses.forEach(address => {
    //     requests.push( axios.get(`https://api.helius.xyz/v0/addresses/${address}/nfts?api-key=f343c517-f581-41c6-850e-92aed788d6fa`, {}, {
    //       withCredentials: false,
    //       headers : {
    //           'Content-Type': 'application/json',
    //         },
    //       }
    //       ) )
    //   })

    //   try {
    //     const responses = await Promise.all(requests)
    //  let NXDE_slider_data = responses[0].data.nfts.filter( i => i.collectionName !== "Unknown");
    //   NXDE_slider_data = NXDE_slider_data.filter( i => i.imageUrl.includes(".gif") !== true).slice(0, 20);
    //  console.log("NXDE_slider_data",NXDE_slider_data)
      
    //   let BLXCKOUT_slider_data = responses[1].data.nfts.filter( i => i.collectionName !== "Unknown");
    //   BLXCKOUT_slider_data = BLXCKOUT_slider_data.filter( i => i.imageUrl.includes(".gif") !== true).slice(0, 20);
    //  console.log("BLXCKOUT_slider_data",BLXCKOUT_slider_data)
   

    //  let DEALS_slider_data = shuffle([
    //   ...NXDE_slider_data,
    //   ... BLXCKOUT_slider_data
    // ])
    // console.log("DEALS_slider_data",DEALS_slider_data)
    //   setslideData({
    //       NXDE: NXDE_slider_data,
    //       BLXCKOUT: BLXCKOUT_slider_data,
    //       RANDOM : DEALS_slider_data
    //     })
    //     // console.log(responses)
    //   } catch(e) {
    //     console.error(3)
    //   }
    //  }, [])
   
     function shuffle(array) {
      let currentIndex = array.length,  randomIndex;
    
      // While there remain elements to shuffle.
      while (currentIndex != 0) {
    
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
    
      return array;
    }
    
      useEffect(()=>{
        fetchBlxckoutData()
        fetchNXDEData()
      },[])
      const fetchBlxckoutData = async () => {
         await axios.get(`https://api-mainnet.magiceden.dev/v2/collections/blxckout_/listings?offset=0&limit=20`,
          )
            .then(({ data }) => {
              let mainArr = [];
              mainArr = data;
              if(mainArr.length > 0){
                mainArr.map((item, index) => {
                  if(blxckout_data_arr.length < 20){
                    let price = item.price;
                    axios.get(`https://api-mainnet.magiceden.dev/v2/tokens/${item.tokenMint}`,
                              )
                                .then(({ data }) => {
                                  if(data){
                                    data.price = price
                                    console.log(data)
                                    setBlxckout_data_arr(oldArray => [...oldArray,data] );
                                  }
                                })
                                .catch(function (error) {
                                  console.log("error => ",error)
                                });
                  }
                })
              }

            })
            .catch(function (error) {
              console.log("error => ",error)
            })
            .finally(() => {  console.log("setBlxckout_data_arr",blxckout_data_arr)  });

            

      }
      const fetchNXDEData = async () => {
        await axios.get(`https://api-mainnet.magiceden.dev/v2/collections/thenxde/listings?offset=0&limit=20`,{},{
          withCredentials: false,
                headers : {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Credentials' : true
                  }
        }
         )
           .then(({ data }) => {
             let mainArr = [];
             mainArr = data;
             if(mainArr.length > 0){
               mainArr.map((item, index) => {
                 if(nxde_data_arr.length < 20){
                   let price = item.price;
                   axios.get(`https://api-mainnet.magiceden.dev/v2/tokens/${item.tokenMint}`,{},{
                    withCredentials: false,
                    headers : {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Credentials' : true
                      }
                  }
                             )
                               .then(({ data }) => {
                                 if(data){
                                   data.price = price
                                   console.log(data)
                                   setNxde_data_arr(oldArray => [...oldArray,data] );
                                 }
                               })
                               .catch(function (error) {
                                 console.log("error => ",error)
                               });
                 }
               })
             }

           })
           .catch(function (error) {
             console.log("error => ",error)
           })
           .finally(() => {  console.log("setBlxckout_data_arr",blxckout_data_arr)  });

           

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
                      const { name , image, attributes, price } = post; 
                      let obj = attributes.find(o => o.value === 'Rental');
                    if(!obj){
                      return(
                        <Row className='d-flex'>
                            <Col md={5} sm={12}>
                            <img src={image} className="nfticon w-100" alt="missing" />
                            </Col>
                            <Col md={7} sm={12}>
                                <div className=" ">
                                  <h2 className="fw-bold">{name}</h2>
                                  <p className="f-14">Holders of a Blxckout NFT will be given benefits on all future products, services and collections.</p>
                                <div className="socialnft">
                                  <div className="hash">
                                      <span className='text-muted f-14'>Price</span>
                                      <p className="fw-bold height01 f-14 mb-2 textPink">{price} SOL</p>
                                    </div>
                                    <button>Buy Now</button>
                                  </div>
                                </div>
                                <div className="w-95">
                                  <div className="slidercontent">
                                    {Children.toArray(attributes.map(trait => (
                                      <div className="hash">
                                      <span className='text-muted f-14'>{trait.trait_type}</span>
                                      <p className="fw-bold height01 f-14 mb-2 textPink">{trait.value}</p>
                                    </div>
                                    )))}
                                    </div>
                                </div>
                            </Col>
                          </Row>
                      )
                    }
                       } ))}
                   </Slider>}
               
                    
              <div className="headingnfts">
                <h1 className='abel'>NXDE Collection</h1>
                <p className='abel fw-light'>Access to 3 x top spec RPC nodes in a highly redundant setting for 1 year. No monthly subscription. Can be used for building Solana products, sniping and botting. A product from BLXCKOUT.</p>
              </div>
              {nxde_data_arr.length > 0 && 
                <Slider className='py-5' {...slideN}>
                  {Children.toArray(nxde_data_arr.map((post)=> {
                    const { name , image, attributes, price } = post; 
                      let obj = attributes.find(o => o.value === 'Rental');
                      if(!obj){
                        return(
                      <Row className='d-flex'>
                        <Col md={5} sm={12}>
                        <img src={image} className="nfticon w-100" alt="missing" />
                        </Col>
                        <Col md={7} sm={12}>
                            <div className=" ">
                              <h2 className="fw-bold">{name}</h2>
                              <p className="f-14">Holders of a Blxckout NFT will be given benefits on all future products, services and collections.</p>
                              <div className="socialnft">
                                  <div className="hash">
                                      <span className='text-muted f-14'>Price</span>
                                      <p className="fw-bold height01 f-14 mb-2 textPink">{parseFloat(price).toFixed(1)} SOL</p>
                                    </div>
                                    <button>Buy Now</button>
                                  </div>
                                </div>
                                <div className="w-95">
                                  <div className="slidercontent">
                                    {Children.toArray(attributes.map(trait => (
                                      <div className="hash">
                                      <span className='text-muted f-14'>{trait.trait_type}</span>
                                      <p className="fw-bold height01 f-14 mb-2 textPink">{trait.value}</p>
                                    </div>
                                    )))}
                                    </div>
                                </div>
                        </Col>
                      </Row>
                  )
                      }
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
            <Slider {...settings}>
                 {Children.toArray([...blxckout_data_arr,...nxde_data_arr].sort(() => Math.random() - 0.5).map((post)=> {
                  const { name , image, price,collection } = post; 
                  return(
                  <div>
                    <img src={image} className="w-100" alt="missing" />
                    <div className="d-flex pt-2 space-between ">
                      <div className="hash">
                        <span className='textPink'>{name} 
                          <OverlayTrigger overlay={
                              <Tooltip id={`tooltip`}> Tooltip on  </Tooltip>
                            }>
                            <Button className='p-0 textPink ' variant=''><AiFillExclamationCircle/></Button>
                          </OverlayTrigger>
                        </span>
                        <h6 className="fw-bold ">{collection.toUpperCase()}</h6>
                      </div>
                      <button className="detailbtn">Details</button>
                    </div>
                    <div className="d-flex space-between ">
                      <div className="hash">
                        <span className='text-muted'>PRICE</span>
                        <p className="fw-bold height08 f-14 mb-2">{parseFloat(price).toFixed(1)}</p>
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
