import "../../cssforcomponent/styleForall.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar2() {
  const Navigat = useNavigate();
  const cart = useSelector((state) => state.cart);
  return (
    <React.Fragment>
      <div className="w-100 d-flex d-lg-none  navbtm">
        <div className="w20 d-flex flex-column justify-content-center align-items-center bg-white " onClick={()=>Navigat('/')}>
          <AiOutlineHome />
          <Link to={'/'} className="navbt2-link   text-info">Home</Link>
        </div>
        <div className="w20 d-flex flex-column justify-content-center align-items-center bg-white " onClick={()=>Navigat('./explore')}>
          <BiSearch />
          <Link to={'/explor'} className="navbt2-link   text-info">Explor</Link>
        </div>
        <div className="w20 d-flex flex-column justify-content-center align-items-center bg-white  ">
          <Link className=" text-dark position-relative" onClick={()=>Navigat('/Cart')}>
            <PiShoppingCartSimpleBold />
            {cart.cartItems.length !== 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> {cart.cartItems?.length}</span>
            )}
              </Link>
          <Link to={'/Cart'} className="navbt2-link   text-info">Cart</Link>
        </div>
        <div className="w20 d-flex flex-column justify-content-center align-items-center bg-white" onClick={()=>Navigat('/offer')}>
          <MdOutlineLocalOffer />
          <Link  to={'./offer'} className="navbt2-link   text-info">Offer</Link>
        </div>
        <div className="w20 d-flex flex-column justify-content-center align-items-center bg-white" onClick={()=>Navigat('./account')}>
          <GoPerson />
          <Link to={'./account'} className="navbt2-link   text-info" >account</Link>
        </div>
      </div>
    </React.Fragment>
  );
}
