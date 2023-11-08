import './Home.css'
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "../component/Header/Header";
import BestSeler from "../component/Header/BestSeler";
import Advertising from "../component/Advertising";
import LatestNews from '../component/LatestNews';
import Footer from '../component/Footer';
import Undermenu from '../component/Header/NavbarResponsive/Undermenu';
import Navbar2 from '../component/Header/NavbarResponsive/Navbarbootom';
export default function Home() {
  return (
    <React.Fragment>
        <Header />
        <BestSeler/>
        <Advertising/>
        <LatestNews/>
        <Footer/>
        <Navbar2/>
        <Undermenu/>
    </React.Fragment>
      
    
  );
}
