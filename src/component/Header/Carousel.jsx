import "../cssforcomponent/styleForall.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import item1 from "../../assets/header/wengang-zhai-_fOL6ebfECQ-unsplash.jpg";
import item2 from "../../assets/header/domino-164_6wVEHfI-unsplash.jpg";
import item3 from "../../assets/header/domino-j7zu2kpTnwY-unsplash.jpg";
import item4 from "../../assets/header/linda-xu-fUEP0djb1hA-unsplash.jpg";
import item5 from "../../assets/header/maksim-larin-LtB12xWnkpw-unsplash.jpg";
import item6 from "../../assets/header/maksim-larin-NOpsC3nWTzY-unsplash.jpg";
import product1 from "../../assets/header/Banner/image Product.png";
import product2 from "../../assets/header/Banner/image Product (1).png";
import product3 from "../../assets/header/Banner/image Product (2).png";

export default function Carousel() {
  return (
    
    <div id="carouselExampleControls" class="carousel slide w-100 m-auto my-5" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src={item1}
            class="d-block w-100 img-fluid item-of-carouse"
            alt="..."
          />
          <div class="carousel-caption text-info d-none d-md-block display-2">
            <h1 className="display-2 fw-semibold">Super Flash sale</h1>
            <h2 className="display-2 fw-semibold">50% off</h2>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src={item2}
            class="d-block w-100 img-fluid item-of-carouse"
            alt="..."
          />
          <div class="carousel-caption text-info d-none d-md-block display-2">
            <h1 className="display-2 fw-semibold">Super Flash sale</h1>
            <h2 className="display-2 fw-semibold">50% off</h2>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src={item3}
            class="d-block w-100 img-fluid item-of-carouse"
            alt="..."
          />
          <div class="carousel-caption text-info d-none d-md-block display-2 ">
            <h1 className="display-2 fw-bold ">Super Flash sale</h1>
            <h2 className="display-2 fw-bold ">50% off</h2>
          </div>
        </div>
        <div class="carousel-item">
          <div class="carousel-caption text-info d-none d-md-block display-2">
            <h1 className="display-2 fw-semibold">Super Flash sale</h1>
            <h2 className="display-2 fw-semibold">50% off</h2>
          </div>
          <img
            src={item4}
            class="d-block w-100 img-fluid item-of-carouse"
            alt="..."
          />
          <div class="carousel-caption text-info d-none d-md-block display-2">
            <h1 className="display-2 fw-semibold">Super Flash sale</h1>
            <h2 className="display-2 fw-semibold">50% off</h2>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src={item5}
            class="d-block w-100 img-fluid item-of-carouse"
            alt="..."
          />
          <div class="carousel-caption text-info d-none d-md-block display-2">
            <h1 className="display-2 fw-semibold">Super Flash sale</h1>
            <h2 className="display-2 fw-semibold">50% off</h2>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src={item6}
            class="d-block w-100 img-fluid item-of-carouse"
            alt="..."
          />
          <div class="carousel-caption text-info d-none d-md-block display-2">
            <h1 className="display-2 fw-semibold">Super Flash sale</h1>
            <h2 className="display-2 fw-semibold">50% off</h2>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev "
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next "
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>

{/* START BANNER IN CAROSEL */}

      <div className="Banner-container w-75 bg-white mb-5 d-none d-md-flex">
        <div className="row Banner-parent  m-auto text-center ">
        <div className="col-4 border-2 card p-3">
            <img className="card-img img-fluid p-3" src={product1} alt="" />
            <div className="d-flex justify-content-center m-3">
              <h4 className="fw-bold text-dark">Fs Nike air212</h4>
            </div>
            <div className="d-flex justify-content-around align-items-center">
              <p className="text-muted ">
                <strike>100.000$</strike>
              </p>
              <p className="text-danger fw-bold">20% off</p>
            </div>
            <div className="d-flex justify-content-around align-items-center">
              <h3 className="text-info fw-bold text-center me-3">80.000$</h3>
              <button class="btn btn-secondary">add</button>
            </div>
          </div>
          <div className="col-4 border-2 card">
            <img className="card-img img-fluid p-3" src={product2} alt="" />
            <div className="d-flex justify-content-center m-3">
              <h4 className="fw-bold text-dark">Fs Nike air212</h4>
            </div>
            <div className="d-flex justify-content-around align-items-center">
              <p className="text-muted ">
                <strike>100.000$</strike>
              </p>
              <p className="text-danger fw-bold">20% off</p>
            </div>
            <div className="d-flex justify-content-around align-items-center">
              <h3 className="text-info fw-bold text-center me-3">80.000$</h3>
              <button class="btn btn-secondary">add</button>
            </div>
          </div>
          <div className="col-4 border-2 card">
            <img className="card-img img-fluid p-3" src={product3} alt="" />
            <div className="d-flex justify-content-center m-3">
              <h4 className="fw-bold text-dark">Fs Nike air212</h4>
            </div>
            <div className="d-flex justify-content-around align-items-center">
              <p className="text-muted ">
                <strike>100.000$</strike>
              </p>
              <p className="text-danger fw-bold">20% off</p>
            </div>
            <div className="d-flex justify-content-around align-items-center">
              <h3 className="text-info fw-bold text-center me-3">80.000$</h3>
              <button class="btn btn-secondary">add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
