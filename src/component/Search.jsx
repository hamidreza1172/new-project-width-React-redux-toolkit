import './cssforcomponent/styleForall.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Search() {
  return (
    <div className='btn-group d-flex justify-content-center align-items-center  my-5'>
         <input type="text"className='inputsearch' placeholder='Inter Your query'/>
         <button  className='btnforsearch' >search</button>
    </div>
  )
}
