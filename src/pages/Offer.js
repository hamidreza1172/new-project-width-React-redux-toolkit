import Navbarbootom from '../component/Header/NavbarResponsive/Navbarbootom'
import Undermenu from '../component/Header/NavbarResponsive/Undermenu'


import imgcoupon from '../assets/offer/Cupon Promotion.png'
import imgbanner1 from '../assets/offer/Offer Banner 1.png'
import imgbanner2 from '../assets/offer/Offer Banner 2.png'
import Navbar from '../component/Header/NavbarResponsive/Navbar'

export default function Offer() {
  return (
    <div>
        <Navbar/>
        <div className='container m-4'><p className="h4 fw-bolder offerr">Offer</p></div>
        <hr />
       <div className="text-center"><img src={imgcoupon} alt='img1' className=' img-fluid w-75  my-2'/></div>
       <div className="text-center"><img src={imgbanner1} alt='img2' className=' img-fluid w-75  my-2'/></div>
       <div className="text-center"><img src={imgbanner2} alt='img3' className=' img-fluid w-75  my-4'/></div>
        <Navbarbootom/>
        <Undermenu/>
    </div>
  )
}
