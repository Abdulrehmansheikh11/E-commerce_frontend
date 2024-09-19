import React, { useState, useEffect } from 'react'
import { useContext } from 'react';
import "./Reg.css";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Components/usecontext/CartContext';
import UserContext from '../../Components/usecontext/Usercontext';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faBars, faBackward, faArrowLeft } from '@fortawesome/free-solid-svg-icons';


function Login() {
    const { SetId, loadcart } = useContext(ShopContext);
    const { userData, setIsLoggedIn, isLoggedIn, setProfile, setload, updateBooleanValue } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handlechange = () => {
        const User = userData.find(user => user.email === email && user.password === password)
        console.log("user", User);

        if (User) {
            SetId(User.id);
            setProfile(User);
            setError("");
            setEmail("");
            setPassword("");
            updateBooleanValue(true);
            alert("data is valid");

        } else {

            setError("account not found");
        }
    }


  const navigate=useNavigate();

    return (
        <div>
           
            <div className='parent'>
            <FontAwesomeIcon icon={faArrowLeft} className='cross' onClick={()=>{navigate("/")}}/>
           
                <h3 className='brands'>Gadget<span style={{ color: 'darkred' }}>o</span>.</h3>
                <div className='forms'>
                    <h1>Login</h1>
                    <input placeholder='Email' type='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <input placeholder='Password' type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    {error && <div style={{ color: "red", marginLeft: "10px" }}>{error}</div>}
                    <button onClick={handlechange}>Login</button>
                    <p>Create Account <Link to={"/signup"} className='link'>Signup</Link></p>
                </div>
                <div class="line">Terms and policy applied</div>

            </div>
        </div>
    )
}

export default Login
