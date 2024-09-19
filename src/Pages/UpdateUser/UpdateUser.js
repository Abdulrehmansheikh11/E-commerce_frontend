import React, { useContext, useEffect } from 'react'
import "./UpdateUser.css";
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import UserContext from '../../Components/usecontext/Usercontext';
import img1 from "../../assets/blank-profile-picture-973460_1280.png"

function UpdateUser() {
    const {state}=useLocation();
    const navigate=useNavigate();
    console.log("state is ",state)
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");

   const {userData,setProfile,handleImageChange,handleImgClick,inputRef,image,setImage}=useContext(UserContext);

    const handlechange=()=>{
        const User=userData.find(user=>user.email===state.email)
        console.log("user",User);
     if(User){
        User.name=name;
        User.address=address;
        User.image=image;
        setProfile(User);
        navigate("/profile")
    }else{ 
        console.log("fault")
    }
    }


    useEffect(()=>{
        if(localStorage.getItem("image")){
        const qun= localStorage.getItem("image")
            setImage(qun);
        }
        setName(state.name);
        setAddress(state.address)
       
    },[])

  return (
    <div className='parent'>
            <div className='form'>
                <h1>Profile</h1>
                <div onClick={handleImgClick} className='dip'>
                    {image ?
                        <img src={image} alt="Uploaded Image" style={{ borderRadius: "50%" }} /> :
                        <img src={img1} alt="Placeholder Image" />
                    }
                    <input type='file' ref={inputRef} style={{ display: "none" }} onChange={handleImageChange} />
                </div>

                <input placeholder='Full Name' type='text' value={name} onChange={(e) => { setName(e.target.value) }} />
                <input placeholder='Address' type='text' value={address} onChange={(e) => { setAddress(e.target.value) }} className='' />
             
                <button onClick={handlechange}>Update Profile</button>
           
            </div>


        </div>
  )
}

export default UpdateUser
