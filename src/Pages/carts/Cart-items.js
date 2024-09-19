
import React from "react";
import { ShopContext } from "../../Components/usecontext/CartContext";
import { useContext } from "react";
 import "./Cart.css"

function Cartitems(props) {
    const { name, id, img, price ,quantity} = props.data;
    const obj=props.data;
  
    const {cartItems,removeFromCart, addToCart}=useContext(ShopContext)
    return (
        <div   className="ca">
            <div className="cart2">
                <img src={img} alt={name} />
            </div>
            <div className="cart3">
                <h3>{name}</h3>
                <p>{price}</p>

                <div className="quantity-controls">
                    <button className="sad" onClick={()=>removeFromCart(obj)}>-</button>
                    <span className="span">{quantity}</span>
                    <button className="sad" onClick={()=>addToCart(obj)}>+</button>
                </div>
                
            </div>
             
            
        </div>

    )
}
export default Cartitems;