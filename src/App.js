//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faEnvelope, faUser, faMagnifyingGlass, faCheck, faThumbsUp, faPhone, faBriefcaseMedical } from '@fortawesome/free-solid-svg-icons'

import { Route,Router,Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Nav from './Components/nav/Nav';
import Footer from './Components/footer/Footer';
import Login from './Pages/Registration/Login';
import Signup from './Pages/Registration/Signup';
import Profile from './Pages/profile/Profile';
import UpdateUser from './Pages/UpdateUser/UpdateUser';
import ProductDetails from './Pages/ProDetails/Prodetails';
import Picker from './Pages/Color-picker/Color-picker';
import { UserProvider } from './Components/usecontext/Usercontext';
import { ShopContextProvider } from './Components/usecontext/CartContext';
import { FavoritesProvider } from './Components/usecontext/FavContext';
import Products from './Pages/Productpage/Products';
import Like from './Pages/Fav/Like';
import { CategoryProvider } from './Components/usecontext/CatContext';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
function App() {
  const location = useLocation();

  // Determine if the current path is '/login' or '/signup'
  const isLoginPage = location.pathname === '/login';
  const isSignupPage = location.pathname === '/signup';
  const isUpdatePage=location.pathname==='/update';

  // Render the Nav and Footer only if not in login or signup pages
 const renderNavAndFooter = !isLoginPage && !isSignupPage &&  !isUpdatePage;
  return (
    <>
    <I18nextProvider i18n={i18n} >
    <CategoryProvider>
   <FavoritesProvider>
    <ShopContextProvider>
    <UserProvider>
      {renderNavAndFooter && <Nav />}
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/shop' element={<Products/>}/>
          <Route path='/like' element={<Like/>}/>
          <Route path='/pro' element={<ProductDetails/>}/>
          <Route path='/update' element={<UpdateUser/>}/>
          <Route path="/picker" element={<Picker/>}/>
        
        </Routes>
        {renderNavAndFooter && <Footer />}
        </UserProvider>
        </ShopContextProvider>
        </FavoritesProvider>
        </CategoryProvider>
        </I18nextProvider>
    </>
  );
}

export default App;
