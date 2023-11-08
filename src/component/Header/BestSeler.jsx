import "../cssforcomponent/styleForall.css"
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import rate from "../../assets/bestseller/rate.png";
import useFetsh from "../../hooks/useFetsh";
import {PiShoppingCartSimpleFill} from "react-icons/pi"
import {AiFillHeart} from "react-icons/ai"
import { useDispatch } from "react-redux";
import { addToCart } from "../cartSlice";


export default function BestSeler() {

  const dispatch =useDispatch()
   const [bol,setBol]=useState(true);

  const handleaddToCart=(product)=>{
  dispatch(addToCart(product));


  }
  const [url,setUrl] = useState("https://fakestoreapi.com/products?limit=8");
  const { data,isLoading } = useFetsh(url);

  const loadmre = (e) => {
    e.preventDefault();
    setBol(false);
    setUrl("https://fakestoreapi.com/products");
  };
  return (
    <React.Fragment>
      <div className="container ">
        <h2 className="fw-bolder text-center">BEST SELLER</h2>
        <div className="nav-in-best-seller d-flex justify-content-center py-4">
          <Link
            to={"/"}
            className="me-5 text-dark text-decoration-none fw-bold"
          >
            All
          </Link>
          <Link
            to={"/Bags"}
            className="me-5 text-dark text-decoration-none fw-bold"
          >
            Bags
          </Link>
          <Link
            to={"/Sneakers"}
            className="me-5 text-dark text-decoration-none fw-bold"
          >
            Sneakers
          </Link>
          <Link
            to={"/"}
            className="me-5 text-dark text-decoration-none fw-bold"
          >
            Belt
          </Link>
          <Link
            to={"/"}
            className="me-5 text-dark text-decoration-none fw-bold"
          >
            Sunglasses
          </Link>
        </div>
        <div className="row">
          {
          isLoading && <h1>is Loading ...</h1> 
          }
          {data.map((prouduct,index) => (
            <div className="col-12 col-md-6 col-lg-3 mb-3" key={index}>
              <div className="card-in-best rounded-4 m-4 m-lg-0">
                <div>
                <img src={prouduct.image} alt="img1" className="p-3 img-fluid img1" />
                <div className="d-none d-lg-flex hoveer">
                    <PiShoppingCartSimpleFill className="icon-in-product text-info" size={42} onClick={()=>handleaddToCart(prouduct)}/>
                    <AiFillHeart className="icon-in-product text-danger " size={42}/>
                </div>
                </div>
                <p className="h3 fw-bolder text-center">{prouduct.category}</p>
                <div className="text-center">
                  <img className="my-3" src={rate} alt="img" />
                </div>
                <div className="text-center d-flex justify-content-center">
                  <p className="text-info h6 fw-bold">{prouduct.price}$</p>
                  <p className="mx-3">
                    <strike>534.33$</strike>
                  </p>
                  <p className="text-danger">24% off</p>
                </div>
                <div className="d-flex justify-content-center w-100">
                <button className="d-flex d-lg-none btn btn-info w-50 text-center text-white justify-content-center mb-3" onClick={()=>handleaddToCart(prouduct)}>Add To Cart</button>
                </div>
              </div>
            </div>
          ))}
          
          {
            bol && 
            <div className="text-center w-100 mt-3 mb-5">
            <a
              href="/"
              className="h4  fw-boldr load-more-key"
              onClick={(e) =>loadmre(e)}
            >
              LOADE MORE
            </a>
          </div>
          }
          {!bol &&
            <div className="w-100 mt-3 mb-5"></div>
          }
        </div>
      </div>
      ّ
    </React.Fragment>
  );
}
