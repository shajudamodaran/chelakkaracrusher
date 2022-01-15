import React from 'react'
import '../Style/Homepage/homepage.css'


import wallImage from '../Assets/Images/Banner/banner3.jpg'
import animBaner from '../Assets/Images/Banner/banner1.jpg'
import metalImage from '../Assets/Images/metal.jpg'
import Footer from '../Components/Footer/Footer'
import mapImage from '../Assets/Images/Map/map.png'
import { Button, Input } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import ImageSlider from '../Components/ImageSlider/ImageSlider'
import SlickSlider from '../Components/SlickSlider/SlickSlider'
import { EnquireNowIcon } from '../Assets/Icons/svgicons'
import OurProducts from '../Components/OurProducts/OurProducts'
import LocationMap from '../Components/LocationMap/LocationMap'
import GetInTouch from '../Components/Getintouch/GetInTouch'

function HomePage() {

    const simulateCall = phoneNumber => window.open(`tel:${phoneNumber}`, '_self');


    return (
        <div className='home-page-container'>


            <SlickSlider />

            <OurProducts />

           <LocationMap/>

            {/* <div className="home-item mt-large">

                <div className="item-head mt-4">
                    Location Map
                </div>

                <div className="item-body">

                    <img src={mapImage} alt="" />


                </div>


            </div> */}

           <GetInTouch/>



            <a href="tel:+91 7559988733" className="customer-support">
                <EnquireNowIcon />
            </a>



            <Footer />
        </div>
    )
}

export default HomePage
