
import './App.css';
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter as Router,Routes, Route,} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

import Home from "./pages/Home"
import Navbar2 from './component/Header/NavbarResponsive/Navbarbootom';
import Bags from './pages/Bags';
import Contact from './pages/Contact';
import { Provider } from 'react-redux';
import { Store } from  '../src/component/Stor';
import Cart from './pages/Cart';
import Jewelery from './pages/Jewelery';
import Offer from './pages/Offer';
import Login from './pages/Login';
function App() {
  return (
    <Provider store={Store}>
    <div className="App"> 
  
    <Router>
  <ToastContainer/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Bags' element={<Bags/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Cart' element={<Cart/>}/>
    <Route path='/Jewelery' element={<Jewelery/>}/>
    <Route path='/offer' element={<Offer/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/*' element={<Home/>}/>
   </Routes>
   
    </Router> 
    </div>
    </Provider>
  );
}

export default App;
