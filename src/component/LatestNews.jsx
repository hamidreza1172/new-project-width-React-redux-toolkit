import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import niklogo from '../assets/Latestnew/Nike_logo_emblem_logotype 1.png'
import figmalogo from '../assets/Latestnew/figma-1-logo 1.png'
import kronos from '../assets/Latestnew/kronos-logo-1-1 2.png'
export default function LatestNews() {
  return (
    <React.Fragment>
<div className="container"> 
       <p className="h2 text-center my-5 text-dark fw-bolder">LATEST NEWS</p>
    <div className='row'>
<div className="col-12 col-lg-4 d-flex p-4">
    <img src={niklogo} className='img-fluid py-5' alt="img" />
   <div className="d-flex flex-column">
    <p className="text-muted p-0 m-0 fw-small">01 Jan, 2015</p>
    <p className="h3 mb-4 fw-bolder">Fashion Industry</p>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
   </div>
</div>
<div className="col-12 col-lg-4 d-flex p-4">
    <img src={figmalogo} className='img-fluid py-5' alt="img" />
   <div className="d-flex flex-column">
    <p className="text-muted p-0 m-0 fw-small">01 Jan, 2015</p>
    <p className="h3 mb-4 fw-bolder">Fashion Industry</p>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
   </div>
</div>
<div className="col-12 col-lg-4 d-flex p-4">
    <img src={kronos} className='img-fluid py-5' alt="img" />
   <div className="d-flex flex-column">
    <p className="text-muted p-0 m-0 fw-small">01 Jan, 2015</p>
    <p className="h3 mb-4 fw-bolder">Fashion Industry</p>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
   </div>
</div>
  </div>
  </div>
    </React.Fragment>
  )
}
