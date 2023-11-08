import React from "react";
import Navbar from "./NavbarResponsive/Navbar";
import Carousel from "./Carousel";


export default function Header() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="carousselcotain" >
      <Carousel /> 
      </div>  
    </React.Fragment>
  );
}
