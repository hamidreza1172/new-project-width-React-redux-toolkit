import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { BsFillTrash3Fill } from "react-icons/bs";

import Navbar from "../component/Header/NavbarResponsive/Navbar";
import { increase, decrease, Removecart } from "../component/cartSlice";
import { Link } from "react-router-dom";
import Undermenu from "../component/Header/NavbarResponsive/Undermenu";
import Navbar2 from "../component/Header/NavbarResponsive/Navbarbootom";
export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [subTotal,setSubTotal]=useState([]);
  const [total,setTotal]=useState(0)


  

  return (
    <React.Fragment>
      <Navbar />
      {
       cart.cartItems.length === 0 &&
       <div className="d-flex flex-column justify-content-center align-items-center empty-cart-shopping"> 
         <p className="fww-bold h3">You have not added a shopping card yet</p>
         <div>
         <p className="h5 text-muted">Click on the opposite link to place an order</p>
         <Link role="button h4 text-info fw-bolder text-decoration-none" to={"/Home"}>Go to shop</Link>
         </div>
       </div>
      }
      
      {
          cart.cartItems.length>0 &&
      <div className="container">
       <div className="row p-3 my-5 text-center ">
          <p className="fw-bold h1">Shoping Cart</p>
        </div>
        <div className="row mt-4 ms-4 ">
          <div className="col-10 col-lg-5 text-center  text-lg-start">
            <p className="h5 fw-bolder mb-0 pb-0">product</p>
          </div>
          <div className="col-2 text-center d-none d-lg-block">price</div>
          <div className="col-2 text-center d-none d-lg-block">quentity</div>
          <div className="col-2 text-center d-none d-lg-block">Total</div>
          <div className=" col-lg-1 text-danger text-center d-none d-lg-block">
            Remove
          </div>
        </div>
        <hr />

        {cart?.cartItems?.map((cartItem) =>{
          // cart.cartTotalAmount +=cartItem?.price*cartItem?.cartTotalQuentity;
          return(
          <div className="container" key={cartItem.id}>
            <div className="row mb-5 ">
              <div className="col-10 text-center text-lg-start col-lg-5 ">
                <img
                  src={cartItem.image}
                  alt="img"
                  className="w-25 imgcart-in-shoppcart"
                />
                <div className=" col-1 text-danger text-start d-lg-none">
                  <BsFillTrash3Fill className="text-danger" onClick={()=>dispatch(Removecart(cartItem.id))} />
                </div>
              </div>
              <div className="col-11 mt-3 d-flex d-lg-none justify-content-around">
                <div className="col-2 text-center">price</div>
                <div className="col-2 text-center">quentity</div>
                <div className="col-2 text-center">Total</div>
              </div>
              <div className="col-4 col-lg-2 pt-5 ps-5 text-center d-flex align-items-center justify-content-center">
                {cartItem.price}
                <span className=" mx-2 h5 text-info">$</span>
              </div>
              <div className="col-4 col-lg-2 pt-5  ps-5 text-center  d-flex align-items-center justify-content-center">
                <div
                  class="btn-group"
                  role="group"
                  aria-label="Basic mixed styles example"
                >
                  <button
                    type="button"
                    onClick={() => dispatch(decrease(cartItem))}
                    class="btn btn-info"
                  >
                    -
                  </button>
                  <button type="button" class="btn btn-secondary">
                    {cartItem.cartTotalQuentity}
                  </button>
                  <button
                    type="button"
                    onClick={() => dispatch(increase(cartItem))}
                    class="btn btn-info"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="col-4 col-lg-2 pt-5  ps-5 text-center  d-flex align-items-center justify-content-center">
                {cartItem.cartTotalQuentity * cartItem.price}
                <span className=" mx-2 h5 text-info">$</span>
              </div>
              <div className="d-none d-lg-block col-1 pt-5  ps-5 text-center  d-flex align-items-center justify-content-center">
                <BsFillTrash3Fill className="text-danger" size={25} role="button"  onClick={()=>dispatch(Removecart(cartItem.id))}/>
              </div>
            </div>

            <hr />



          </div>)
})}

       
         <div className="container">
           <div className="row mt-5 mb-5">
            <div className="col-lg-8"></div>
            <div className="col-12 col-lg-4">
              <div className="containerfor-subtotal d-flex justify-content-between">
                <p>Subtotal</p>
                <p></p>
              </div>
              <div className=" d-flex justify-content-between">
                <p>Shipping fee</p>
                <p>20$</p>
              </div>
              <div className=" d-flex justify-content-between">
                <p>coupon</p>
                <p>No</p>
              </div>
              <hr />
              <button className="btn btn-info w-100 mt-4" >Show Bill</button>

            </div>
          </div>
         </div>
      </div>
        }
        <Navbar2/>
        <Undermenu/>
    </React.Fragment>
  );
}













