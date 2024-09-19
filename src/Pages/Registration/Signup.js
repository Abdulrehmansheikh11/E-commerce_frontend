import React, { useContext, useState, } from 'react'
import { Link } from 'react-router-dom';
import UserContext from '../../Components/usecontext/Usercontext';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faBars, faBackward, faArrowLeft } from '@fortawesome/free-solid-svg-icons';


function Signup() {
    const { updateUser ,setload} = useContext(UserContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [error, setError] = useState("");

    const handlechange = () => {
        if (!email || !name || !password) {
            setError("please Enter the valid info")
        }
        else {
            
            setError("");
            updateUser( name,email, password, address);
            setload(true);
            setName("");
            setEmail("");
            setPassword("");
            setAddress("");
          
        }


    }

    const navigate=useNavigate();
    return (
        <div className='parent'>
             <FontAwesomeIcon icon={faArrowLeft} className='cross' onClick={()=>{navigate("/")}}/>
            <h3 className='brands'>Gadget<span style={{ color: 'darkred' }}>o</span>.</h3>
            <div className='forms'>
                <h1>Signup</h1>
                <input placeholder='Full Name' type='text' value={name} onChange={(e) => { setName(e.target.value) }} />
                <input placeholder='Email' type='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <input placeholder='Password' type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <input placeholder='Address' type='text' value={address} onChange={(e) => { setAddress(e.target.value) }} className='' />
                {error && <div style={{color:"red", marginLeft:"10px"}}>{error}</div>}
                <button onClick={handlechange}>Signup</button>
                <p>have an Account <Link to={"/login"} className='link'>Login</Link></p>
            </div>
            <div class="line">Terms and policy applied</div>

        </div>
    )
}

export default Signup
