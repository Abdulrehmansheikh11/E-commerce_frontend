import React, { useEffect, useState } from 'react';
import "./Prodetails.css";
import { useLocation } from "react-router-dom";
import { useContext } from 'react';
import { ShopContext } from '../../Components/usecontext/CartContext';
import UserContext from '../../Components/usecontext/Usercontext';

function ProductDetails() {
  const { state } = useLocation();
  const { CartItems,setCartItems } = useContext(ShopContext);
  const { profile } = useContext(UserContext)
  const [selectedItem, setSelectedItem] = useState(1);
  const [quantity, setQuantity] = useState(1)


  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
    const data = parseInt(event.target.value)
    setSelectedItem(data);

  };
  

  return (
    <div className="prodetails">

      <div className="single-pro-image">
        <img src={state?.img} />
      </div>

      <div className="single-pro-details">
        <h6 >{state?.name}</h6>
      {/* <h4 style={{ fontSize: '20px' }}>{state.category}</h4 */}

        <h2>${state?.price}</h2>

        <input type="number"
          value={quantity}
          min={1}
          onChange={handleQuantityChange}
        />
        <button onClick={() => {

          //state.userAddID = profile.id;
         state.quantity = selectedItem;
         setCartItems(prevCartItems => [...prevCartItems, state]);
          
        }}>Add to Cart </button>
        <h4>Product Details</h4>
        <span>
          Made for everyone to support our team and cheer for it! This season, all we need is a<br />
          good quality warm jacket made with the softest quality fabric so that we stay focused<br />
          Made for everyone to support our team and cheer for it! This season, all we need is a<br />
          good quality warm jacket made with the softest quality fabric so that we stay focused<br />
          on our matches and feel the warmth on the chilly days.<br />
          Made for everyone to support our team and cheer for it! This season, all we need is <br />
          good quality warm jacket made with the softest quality fabric so that we stay focused<br />
          that is why this is best.<br />
        </span>
      </div>
    </div>
  );
}

export default ProductDetails;
