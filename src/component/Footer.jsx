import "./cssforcomponent/styleForall.css";
import React from "react";
import { SlSocialFacebook } from "react-icons/sl";
import { RxTwitterLogo } from "react-icons/rx";

export default function Footer() {
  return (
    <React.Fragment>
     

      <div className="footer d-none d-lg-block">
        <div className="container">
          <div className="row m-0">
            <div className="col-4 p-5">
              <p className="h3  fw-bold mb-3">E-Comm</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                laborum officiis, rerum in dolore magnam.
              </p>
            </div>
            <div className="col-4 p-5">
                <p className="h3  fw-bold mb-3">Follow Us</p>
                <p>
                  Since the 1500s, when an unknown printer took a galley of type
                  and scrambled.
                </p>
              </div>
          

            <div className="col-4 p-5">
              <p className="h3  fw-bold mb-3">Contact Us</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                laborum officiis, rerum in dolore magnam.
              </p>
            </div>
          </div>
          <p className="h2 fw-bold text-muted text-center pb-4">dev by Ariya hadi(hamidreza)</p>
        </div>
        </div>
    </React.Fragment>
  );
}
