import React, { useEffect, useRef, useState } from 'react'
import "./Shop.css";
import { Item } from '../../Components/Item/Item';
import Productdetails from './Productdetails';
import { useCategory } from '../../Components/usecontext/CatContext';
import UserContext from '../../Components/usecontext/Usercontext';
import { useContext } from 'react';
import { faElevator, faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart, faCartPlus } from '@fortawesome/free-solid-svg-icons';


function Products() {

    const { selectedCategory, setCategory, setColor, selectedCategorys } = useCategory()
    const { isDarkMode } = useContext(UserContext)
    const [filteredProducts, setFilteredProducts] = useState(Item);


    const handleCategoryClick = (category) => {
        setCategory(category);
        setColor(category);
    }


    useEffect(() => {
        if (selectedCategory) {
            const filt = Item.filter((item) => {

                return item.category === selectedCategory;
            });

            setFilteredProducts(filt);
        } else {
            setFilteredProducts(Item);
        }
    }, [selectedCategory, Item]);


    const [click, SetClick] = useState(false);

    const handleClick = () => SetClick(!click);

    return (
        <div>
            <div className='niv'>
                <h1 className=""  >Products</h1>
                
            </div>

            <div className="category-lisd"  >
                <ul>
                    <li> Shop</li>
                    <li>Computer</li>
                    <li>Tablets</li>
                    <li>Drone&Camera</li>
                    <li>Earbuds</li>
                </ul>
            </div>

            <div className='Box' >
                <div className= 'navbar' >

                    <div
                        className={`category ${selectedCategorys === ':)' ? 'selected' : ''}`}
                        onClick={() => handleCategoryClick('')}
                    >
                        Products
                    </div>
                    <hr />
                    <div
                        className={`category ${selectedCategorys === 'Headphones' ? 'selected' : ''}`}
                        onClick={() => handleCategoryClick('Headphones')}
                    >
                        Headphones
                    </div>
                    <hr />
                    <div
                        className={`category ${selectedCategorys === 'Earbuds' ? 'selected' : ''}`}
                        onClick={() => handleCategoryClick('Earbuds')}
                    >
                        Earbuds
                    </div>
                    <hr />
                    <div
                        className={`category ${selectedCategorys === 'Smartwatch' ? 'selected' : ''}`}
                        onClick={() => handleCategoryClick('Smartwatch')}
                    >
                        Smartwatch
                    </div>
                    <hr />
                    <div
                        className={`category ${selectedCategorys === 'SmartTV' ? 'selected' : ''}`}
                        onClick={() => handleCategoryClick('SmartTV')}
                    >
                        SmartTV
                    </div>
                    <hr />
                    <div
                        className={`category ${selectedCategorys === 'Tablets' ? 'selected' : ''}`}
                        onClick={() => handleCategoryClick('Tablets')}
                    >
                        Tablets
                    </div>
                    <hr />
                    <div
                        className={`category ${selectedCategorys === 'Tripods' ? 'selected' : ''}`}
                        onClick={() => handleCategoryClick('Tripods')}
                    >
                        Tripods
                    </div>
                    <hr />
                    <div
                        className={`category ${selectedCategorys === 'Camera' ? 'selected' : ''}`}
                        onClick={() => handleCategoryClick('Camera')}
                    >
                        Camera
                    </div>
                    <hr />
                    <div
                        className={`category ${selectedCategorys === 'Phones' ? 'selected' : ''}`}
                        onClick={() => handleCategoryClick('Phones')}
                    >
                        Phones
                    </div>
                    <hr />
                </div>

                <div className={isDarkMode ? 'dark-right-section' : 'right-section'}   >
                    {
                        filteredProducts.map((item, index) => (
                            <Productdetails key={index} data={item} />
                        ))
                    }
                </div>


            </div>
        </div>
    )
}

export default Products
