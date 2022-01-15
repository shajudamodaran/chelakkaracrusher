import React from 'react'
import Slider from "react-slick";

import image1 from '../../Assets/Images/Banner/banner3.jpg'
import image2 from '../../Assets/Images/Banner/banner2.jpg'
import image3 from '../../Assets/Images/Banner/banner1.jpg'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function SlickSlider() {

    const { innerWidth: width, innerHeight: height } = window;


    const images = [
        { url: image1 },
        { url: image2 },
        { url: image3 },
    ];

    return (
        <Carousel
        autoPlay
        interval={2000}
        infiniteLoop
        emulateTouch
        >
            <div>
                <img src={image1}/>
              
            </div>
            <div>
                <img src={image2}/>
               
            </div>

            <div>
                <img src={image3}/>
               
            </div>
           
        </Carousel>
    )
}

export default SlickSlider
