import "./cssforcomponent/styleForall.css"
import shoe from "../assets/tablighat/shoes-shoe-png-transparent-shoe-images-pluspng-17 1.png";
import responsivebanner from "../assets/tablighat/Responsive Banner.png";
import carry from "../assets/tablighat/shipping.png";
import suport from "../assets/tablighat/support.png";
import refund from "../assets/tablighat/refund.png";
import React from "react";

export default function Advertising() {
  return (
    <React.Fragment>
      <div className=" d-none d-lg-block ">
        <div className=" blueslice">
          <div className="container ">
            <div className="row ">
              <div className="col-6 text-white d-flex flex-column justify-content-center align-items-start">
                <p className="display-5 fw-bolder text-start fon1">
                  Adidas Men Running Sneakers
                </p>
                <p className=" h5 text-start my-2 fon1">
                  Performance and design. Taken right to the edge.
                </p>

                <a
                  href="/"
                  className="text-decoration-none h4 text-white mt-4 fon1"
                >
                  shop now
                </a>
              </div>
              <div className="col-6 parent-img-inadvertising p-0">
                <img
                  src={shoe}
                  alt=""
                  className="img-fluid img-inadvertising"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* for responsive mobile */}

      <div className="d-lg-none">
        <img src={responsivebanner} className="w-100" alt="img" />
      </div>

      {/* row for advertising */}

      <div className="container">
        <div className="row my-5">
          <div className="col-12 p-5 col-lg-4 d-flex flex-column align-items-center justify-content-center">
            <img src={carry} alt="img" />
            <p className="h2">FREE SHIPPING</p>
            <p className="text-center px-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="col-12 p-5 col-lg-4 d-flex flex-column align-items-center justify-content-center">
            <img src={suport} alt="img" />
            <p className="h2">FREE SHIPPING</p>
            <p className="text-center px-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="col-12 p-5 col-lg-4 d-flex flex-column align-items-center justify-content-center">
            <img src={refund} alt="img" />
            <p className="h2">FREE SHIPPING</p>
            <p className="text-center px-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
