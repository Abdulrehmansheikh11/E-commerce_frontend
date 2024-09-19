import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import img1 from "../../assets/blank-profile-picture-973460_1280.png"
import { useContext } from 'react';
import Login from '../Registration/Login';
import "./b.css";
import UserContext from '../../Components/usecontext/Usercontext';
import { ShopContext } from '../../Components/usecontext/CartContext';
import { Item } from '../../Components/Item/Item';
import Cartitems from '../carts/Cart-items';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const { setIsLoggedIn, setProfile, isLoggedIn, userData, image, handleImageChange, handleImgClick, inputRef } = useContext(UserContext);
    const { isDarkMode } = useContext(UserContext)
    const { cartItems } = useContext(ShopContext);
    const navigate = useNavigate();

    // Load profile data from localStorage
    const getProfileFromLocalStorage = () => {
        const profileData = localStorage.getItem("profile");
        if (profileData) {
            return JSON.parse(profileData);
        }
        return null; // Return an empty object if profileData is undefined
    };

    // Initialize profile with data from localStorage or an empty object
    const profile = getProfileFromLocalStorage();



    return (


        isLoggedIn ? (<div className={isDarkMode ? 'dark-contain' : 'contain'}>
            <div className={isDarkMode ? 'darky-left-sections' : 'left-sections'}>
                <button style={{ margin: "10px" }} onClick={() => { navigate("/update", { state: profile }) }} className='update'>update</button>


                <div className='caps'>
                    <img src={profile.image ? profile.image : img1} alt="Profile" />

                </div>


                <h1 >Name: {profile?.name}</h1>
                <p>Email: {profile?.email}</p>
                <p className='cd'>Addresss: {profile?.address}</p>
                <p>{profile?.id}</p>
            </div>
            <div className={isDarkMode ? 'darky-right-sections' : 'right-sections'}>
                <div className="cartb">
                    <h1 style={{ margin: "0", textAlign: "center", color: "#696969", marginTop: "10px" }}>CART</h1>




                    {

                        cartItems.map((item) => {
                            return <Cartitems key={item.id} data={item} />;
                        })

                   /*Item.map((item) => {

                        if (CartItem[item.id] !== 0) {

                            return <Cartitems key={item.id} data={item} />;
                        }
                        return null; // Return null if the condition is not met
                    })
                */}
                </div>
            </div>
        </div>) : <Login />

    );
}


export default Profile;
