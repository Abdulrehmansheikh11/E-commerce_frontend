import React, { useEffect } from 'react'
import "./Main.css";

import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { useCategory } from '../../Components/usecontext/CatContext';
import img1 from "../../assets/main-banner-1.jpg"
import img2 from "../../assets/main-banner.jpg";
import img3 from "../../assets/catbanner-01.jpg"
import img4 from "../../assets/catbanner-02.jpg"
import img5 from "../../assets/catbanner-03.jpg";
import img6 from "../../assets/catbanner-04.jpg";
import img7 from "../../assets/service.png";
import img8 from "../../assets/service-02.png";
import img9 from "../../assets/service-03.png";
import img10 from "../../assets/service-04.png";
import { Item } from '../../Components/Item/Item';
import { useContext } from 'react';

import imgs1 from "../../assets/brand-01.png"
import imgs2 from "../../assets/brand-02.png"
import imgs3 from "../../assets/brand-03.png"
import imgs4 from "../../assets/brand-05.png"
import imgs5 from "../../assets/brand-07.png"
import imgs6 from "../../assets/brand-08.png"


import UserContext from '../../Components/usecontext/Usercontext';

import { ShopContext } from '../../Components/usecontext/CartContext';
import { Link, useNavigate } from 'react-router-dom';
function Main() {

  const { isDarkMode, profile, bgcolor, textcolor } = useContext(UserContext)
  const { addToCart, CartItem } = useContext(ShopContext);




  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (!scrollContainerRef.current) return; // Add null check here
    const scrollAmount = direction === 'left' ? -scrollContainerRef.current.clientWidth : scrollContainerRef.current.clientWidth;
    scrollContainerRef.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };


  const scrollContainerRefs = useRef(null);

  const handleScrolls = (direction) => {
    if (!scrollContainerRefs.current) return; // Add null check here
    const scrollAmount = direction === 'left' ? -scrollContainerRefs.current.clientWidth : scrollContainerRefs.current.clientWidth;
    scrollContainerRefs.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  const currentdata = new Date();
  currentdata.setMonth(currentdata.getMonth() - 6);
  console.log(currentdata); // This will log the date six months ago



  /*  for  category */
  const { setCategory, setColor } = useCategory()
  const navigates = useNavigate()

  const handclick = (category) => {
    setCategory(category);
    setColor(category);
    navigates('/shop');
  }
  /*...................................*/

  const navigate = useNavigate()

  return (
    <>


      <div className="category-list" >
        <ul>
          <li> Shop</li>
          <li>Computer</li>
          <li>Tablets</li>
          <li>Drone&Camera</li>
          <li>Earbuds</li>
          <li>More</li>
        </ul>
      </div>

      <div className={'light-mode'} style={{ background: bgcolor, color: textcolor, height:"auto" }}>

        <br />

        <div className='pap'>

          <div className='p1'>
            <div className='ajob'>
              <p className='ag'>RECHARGED FOR PROS</p>
              <h1>IPad 13S+ Pro</h1>
              <p>From 999$ to 49$/month</p>
              <button>BUY NOW</button>
            </div>
          </div>


          <div className='p2'>


            <div className='p3'>
              <div className='p5'>
                <div className='sip2'>
                  <p className='ag'>BEST SALE</p>
                  <h2>Laptop Max</h2>
                  <p className='sip'>Shop the latest style and color</p>
                </div>
              </div>
              <div className='p6'>
                <div className='sip2'>
                  <p className='ag'>15% OFF</p>
                  <h2>Smartwatch 7</h2>
                  <p className='sip'>From 999$ to 49$/month for  ease</p>
                </div>
              </div>
            </div>


            <div className='p4'>
              <div className='p7'>
                <div className='sip2'>
                  <p className='ag'>NEW ARRIVAL</p>
                  <h2>Buy Ipad Pro</h2>
                  <p className='sip'>Shop the latest style and color</p>
                </div>
              </div>
              <div className='p8'>
                <div className='sip2'>
                  <p className='ag'>SALE ON</p>
                  <h2>Airpod max</h2>
                  <p className='sip'>high fidility playback and low distraction</p>
                </div>
              </div>
            </div>


          </div>


        </div>


        <div className='services'>


          <div className='service2'>
            <div className='service'>
              <img src={img7} />
            </div>
            <div className='service1'>
              <h2>Free Shipping</h2>
              <p>from all order over 100$</p>
            </div>

          </div>

          <div className='service2'>
            <div className='service'>
              <img src={img8} />
            </div>
            <div className='service1'>
              <h2>Free Shipping</h2>
              <p>from all order over 100$</p>
            </div>

          </div>


          <div className='service2'>
            <div className='service'>
              <img src={img9} />
            </div>
            <div className='service1'>
              <h2>Free Shipping</h2>
              <p>from all order over 100$</p>
            </div>

          </div>



          <div className='service2'>
            <div className='service'>
              <img src={img10} />
            </div>
            <div className='service1'>
              <h2>Free Shipping</h2>
              <p>from all order over 100$</p>
            </div>

          </div>


        </div>

        <br />
        <br />


        <div className={'sec'} >
          <h2 className='sec1'>Best Seller</h2>
          <div style={{ position: 'relative', overflowX: 'hidden', overflowY: "hidden" }} className={'card-containeri'} >
            <div
              ref={scrollContainerRefs}
              style={{ overflowX: 'scroll', display: 'flex', marginBottom: '-17px' }}
            >
              {Item.filter(item => item.rating >= 4.5).map((item, index) => (
                <div key={index} className="clone" >
                  <div onClick={() => { navigate("/pro", { state: item }) }} ><img src={item.img} alt={item.name} /></div>
                  <h2 className="product-name">{item.name}</h2>
                  <div className='star'>
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} className='st' />
                    ))}
                  </div>

                  <div className='buni'>
                    <h2>${item.price}</h2>
                    <button onClick={() => {

                      if (profile) {
                        item.userAddID = profile.id;
                        addToCart(item)
                      } else {
                        addToCart(item)
                      }



                    }}>Add to Card {item.quantity > 0 ? `(${item.quantity})` : null} </button>
                  </div>
                </div>
              ))}
            </div>


            <FontAwesomeIcon
              icon={faArrowLeft}
              style={{ position: 'absolute', top: '50%', left: '0', transform: 'translateY(-50%)' }}
              onClick={() => handleScrolls('left')}
              className='but'
            />

            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ position: 'absolute', top: '50%', right: '0', transform: 'translateY(-50%)' }}
              onClick={() => handleScrolls('right')}
              className='but'
            />
          </div>
        </div>

        <br />
        <br />

        <div className='ci2' style={{ marginTop: "40px" }}>

          <h1 className={isDarkMode ? "size-dark" : "size"}> Shop by Category</h1>

          <div className='ci1'>

            {
              Item.filter((item) => item.categoryimage)
                .map((item) => (
                  <div onClick={() => handclick(item.category)} >
                    <div className='ci'> <img src={item.img} /></div>
                    <h1 className={isDarkMode ? 'dark' : 'light'}>{item.category}</h1>
                  </div>

                ))

            }
          </div>
        </div>

        <br />
        <br />
        <br />


        <div className='banner4' >
          <div className='banner'>

            <div className='banner1'>

              <p className='ban6'> Today's Special</p>
              <h1> Best Arial View in Town</h1>
              <h1 className='ban3'>30% OFF</h1>
              <h1> on professional camera drones</h1>
              <p>Limited quantities.<br />
                See product detail pages for availability.</p>
              <button>Shop</button>
            </div>
            <img src='https://m.media-amazon.com/images/I/51NuPrrdJ3L._AC_SL1200_.jpg' />

          </div>
        </div>




        <div className='secf' style={{ background: bgcolor }}>
          <h2 style={{fontSize:"25px",textAlign:"center",fontFamily:"sans-serif",padding:"10px",background:"darkred",color:"white"}}>On Sale</h2>
          <div style={{ position: 'relative', overflowX: 'hidden', overflowY: "hidden", background: bgcolor }} className={'card-containeri'}>
            <div
              ref={scrollContainerRef}
              style={{ overflowX: 'scroll', display: 'flex', marginBottom: '-17px', overflowY: "hidden"/* Adjust to hide overflow bar */ }}
            >
              {


                Item.filter(item => item.date < currentdata).map((item, index) => (
                  <div key={index} className="clone"  >
                    <div onClick={() => { navigate("/pro", { state: item }) }}><img src={item.img} alt={item.name} /></div>
                    <h2 className="product-name">{item.name}</h2>
                    <div className='star'>
                      <FontAwesomeIcon icon={faStar} className='st' />
                      <FontAwesomeIcon icon={faStar} className='st' />
                      <FontAwesomeIcon icon={faStar} className='st' />
                      <FontAwesomeIcon icon={faStar} className='st' />
                      <FontAwesomeIcon icon={faStar} className='st' />
                    </div>
                    <div className='buni'>
                      <h2>${item.price}</h2>
                      <button onClick={() => addToCart(item.id)}>Add to Cart{item.quantity > 0 ? `(${item.quantity})` : null} </button>
                    </div>

                  </div>
                ))}
            </div>


            <FontAwesomeIcon icon={faArrowLeft} style={{ position: 'absolute', top: '50%', left: '0', transform: 'translateY(-50%)' }}
              onClick={() => handleScroll('left')} className='but' />

            <FontAwesomeIcon icon={faArrowRight} style={{ position: 'absolute', top: '50%', right: '0', transform: 'translateY(-50%)' }} onClick={() => handleScroll('right')} className='but' />
          </div>

        </div>



       

         <br/>
          <div className='start'>
            <h1 style={{fontSize:"25px",textAlign:"center",fontFamily:"sans-serif",padding:"10px",background:"#1B2631",color:"white"}} >Top Brands</h1>
          <div  className='brand'>
          <img src={imgs1} />
            <img src={imgs2} />
            <img src={imgs3} />
            <img src={imgs4} />
            <img src={imgs5} />
            <img src={imgs6} />

          </div>
         
          </div>

       


      </div>








    </>
  )
}

export default Main
