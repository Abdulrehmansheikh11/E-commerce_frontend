
import Cartitems from "../../Pages/carts/Cart-items";
import { Item } from "../Item/Item";
import { useState, createContext,useEffect } from "react";

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
    // State to manage cart items (as an array of objects)
    const [cartItems, setCartItems] = useState([]);
    const [id, SetId] = useState(null);

    useEffect(() => {
   if (id !== null) {
            const storedCartItems = localStorage.getItem(`cart_${id}`);
            if (storedCartItems) {
                setCartItems(JSON.parse(storedCartItems));
            } else {
                setCartItems([]); // Initialize cart items if not found in localStorage
            }
        }
    else{
        let data =localStorage.getItem("id");
        SetId(data);
        if (id !== null) {
            const storedCartItems = localStorage.getItem(`cart_${id}`);
            if (storedCartItems) {
                setCartItems(JSON.parse(storedCartItems));
            } else {
                setCartItems([]); // Initialize cart items if not found in localStorage
            }
        }
    }
    }, [id]);

    //make separate function for id coz rerender.......................................
    useEffect(() => {
        if (id !== null) {
            localStorage.setItem(`cart_${id}`, JSON.stringify(cartItems));
            localStorage.setItem("id",JSON.parse(id))
        }
    }, [cartItems, id]);
  


    // Function to add item to cart
    const addToCart = (item) => {
        // Check if the item is already in the cart
        const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);

        if (existingItemIndex !== -1) {
            // If the item already exists, update its quantity
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex].quantity ++;
            setCartItems(updatedCartItems);
        } else {
            // If the item is not in the cart, add it
            item.quantity++;
            setCartItems(prevCartItems => [...prevCartItems, item]);
        }
        console.log("cart",cartItems)
    }
  
    


    const removeFromCart = (item) => {
      
        const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
        const updatedCartItems = [...cartItems];
        if (updatedCartItems[existingItemIndex].quantity>1) {
          updatedCartItems[existingItemIndex].quantity --;
            setCartItems(updatedCartItems);
        } else {
              // Filter out the item with the provided ID
              const filteredCartItems = updatedCartItems.filter(cartItem => cartItem.id !== item.id);
              setCartItems(filteredCartItems);
     
        
        }

    }

  

    const contextValue = { cartItems, setCartItems,removeFromCart, addToCart ,SetId};

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
}
