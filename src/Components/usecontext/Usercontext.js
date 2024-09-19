// UserContext.js
import { createContext, useState, useRef, useEffect } from 'react';
import { useFavorites } from './FavContext';

const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [bgcolor,setbgcolor]=useState("#FFFFFF")
  const [textcolor,setTextcolor]=useState("#000000");

  const handleonchange=(color)=>{
    setbgcolor(color.hex);
    setTextcolor(color.hex);
  }

  

  const [userData, setUserData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState();
  const [load, setload] = useState(false);


  const updateBooleanValue = (newValue) => {
    setIsLoggedIn(newValue);
    localStorage.setItem('myBooleanKey', JSON.stringify(newValue));
  };


  useEffect(() => {
    const storedValue = localStorage.getItem('myBooleanKey');
    if (storedValue !== null) {
      setIsLoggedIn(JSON.parse(storedValue));
    }
  }, []);


  useEffect(() => {
    const savedCounter = localStorage.getItem('userIdCounter');
    if (savedCounter) {
      userIdCounter.current = parseInt(savedCounter, 10);
    }
  }, []);


  const userIdCounter = useRef(1); // Initialize userIdCounter with useRef
  
  const updateUser = (name, email, password, address) => {
    let newUser = { id: userIdCounter.current++, name, email, password, address }; // Access current value using .current
    setUserData([...userData, newUser]);

  }; 

  useEffect(() => {
    localStorage.setItem('userIdCounter', userIdCounter.current.toString());
  }, [userData]);




  useEffect(() => {
    if (load === true) {
      localStorage.setItem("Users", JSON.stringify(userData))
      console.log("save2....")
      setload(false);
    }
  }, [load]) /*...do this through a function..*/

 /*
   function UserAdd(){
    localStorage.setItem("Users", JSON.stringify(userData))
    
  }
*/

  useEffect(() => {
    const loadusers = localStorage.getItem("Users")
    if (loadusers) {
      setUserData(JSON.parse(loadusers))
    }
  },[])


  const logout = (id) => {
    setProfile({});
    setIsLoggedIn(false);
    localStorage.removeItem("profile");
    localStorage.removeItem("myBooleanKey");
   localStorage.removeItem("id");
  };


  const [image, setImage] = useState( null);
  const inputRef = useRef(null);

 

  const handleImgClick = () => {
    inputRef.current.click();
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result);
            localStorage.setItem('image', reader.result);
        };
        reader.readAsDataURL(file);
    }
};


  if (isLoggedIn && profile !== undefined) {
    console.log("you are special");
    localStorage.setItem("profile", JSON.stringify(profile)); // Only store profile if it's not undefined
  }




  return (
    <UserContext.Provider value={{ userData, updateUser, setIsLoggedIn,handleonchange,textcolor,bgcolor,updateBooleanValue, setload, isLoggedIn, logout, image, handleImageChange, handleImgClick, inputRef, setImage,setProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
