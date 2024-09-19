import React from 'react'
import "./Shop.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faStar,faHeart, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { ShopContext } from '../../Components/usecontext/CartContext';
import { useFavorites } from '../../Components/usecontext/FavContext';
import UserContext from '../../Components/usecontext/Usercontext';

import { useNavigate } from 'react-router-dom';
function Productdetails(props) {
  const navigate=useNavigate()
  const { name, id, price, rating, img } = props.data;
  const obj=props.data;
  const { CartItem, addToCart } = useContext(ShopContext);
  const { profile}=useContext(UserContext)

  const { favorites, toggleFavorite } = useFavorites();
  let isFavorite = favorites.includes(id);
  
  const handleToggleFavorite = () => {
      toggleFavorite(id);
  };
  
  return (
    <div className="card">
      
      <FontAwesomeIcon
                icon={faHeart}
                style={{ cursor: 'pointer', color: isFavorite ? 'red' : 'gray',position:"relative",right:"40%" }}
                onClick={handleToggleFavorite}
            />

      <div><img src={img} alt={name} onClick={() => { navigate("/pro", { state: props.data }) }}/></div>
      <h2 className="product-name">{name}</h2>
      <div className='star'>
        {[...Array(5)].map((_, i) => (
          <FontAwesomeIcon key={i} icon={faStar} className='st' />
        ))}
      </div>

      <div className='bun'>
        <h2>${price}</h2>
        <FontAwesomeIcon
                icon={faCartPlus}
                onClick={() => addToCart(obj)}
                className='clip'
            />
        <button  className="bot" onClick={() => addToCart(obj)}>Add to Card {obj.quantity > 0 ? `(${obj.quantity})` : null}</button>
      </div>
    </div>
  )
}

export default Productdetails
