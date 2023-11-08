import React from 'react'
import logo3 from '../assets/login/Icon (2).png'
export default function Logotitle() {
  return (
    <React.Fragment>
      <div className='w-100 d-flex flex-column text-center justify-content-center alignitems-center my-3'>
        <div className="text-center my-5"><img src={logo3} alt="logo" className='w-25 img-fluid '/></div>
        <p className='h3 fw-bolder'>Wellcome to E-com</p>
        <p className="text-muted">Sign in to continue</p>
      </div>
    </React.Fragment>
  )
}