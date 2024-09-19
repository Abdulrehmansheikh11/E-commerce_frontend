import React from 'react'
import "./Fav.css";
import { useContext } from 'react';
import { ShopContext } from '../../Components/usecontext/CartContext';
import { Item } from '../../Components/Item/Item';
import { useFavorites } from '../../Components/usecontext/FavContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
import UserContext from '../../Components/usecontext/Usercontext';
function Like() {
    const { addToCard, CartItem } = useContext(ShopContext);
    const { isDarkMode } = useContext(UserContext)
    const { favorites, toggleFavorite } = useFavorites()
    const favoriteItems = Item.filter(item => favorites.includes(item.id));
    return (


        <div className={isDarkMode ? 'dark-contanier' : 'container'} >
            <h1 className='cons'>Wish list <FontAwesomeIcon icon={faHeart} style={{ color: "darkred" }} /></h1>
            <div className='sin'>
                {
                    favoriteItems.length <= 0 ? (
                        <div className='coco'>
                            <h1></h1>
                        </div>
                    ) : (
                        favoriteItems.map((item, index) => (
                            <div key={index} className="clone">
                                <div><img src={item.img} alt={item.name} /></div>
                                <h2 className="product-name">{item.name}</h2>
                                <div className='star'>
                                    {[...Array(5)].map((_, i) => (
                                        <FontAwesomeIcon key={i} icon={faStar} className='st' />
                                    ))}
                                </div>

                                <div className='buni'>
                                    <h2>${item.price}</h2>
                                    <button onClick={() => addToCard(item.id)}>Add to Card</button>

                                </div>
                            </div>
                        ))
                    )
                }


            </div>

        </div>

    )
}

export default Like
