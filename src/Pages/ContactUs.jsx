import React from 'react'
import Footer from '../Components/Footer/Footer'
import SlickSlider from '../Components/SlickSlider/SlickSlider'
import '../Style/Contactpage/contactpage.css'
import animBaner from '../Assets/Images/Banner/banner1.jpg'
import mapImage from '../Assets/Images/Map/map.png'
import gmailIcon from '../Assets/Icons/gmail.svg'
import mobileIcon from '../Assets/Icons/mobile.svg'
import addressIcon from '../Assets/Icons/location.svg'
import { Button, Input } from 'antd'
import TextArea from 'antd/lib/input/TextArea'

function ContactUs() {



    return (
        <>
            <div className='contact-page-container'>

                {/* <img src={animBaner} alt="" className='contact-banner' /> */}


                <div className="map-container">

                    <div className="location">
                        <img src={mapImage} alt="" />
                    </div>

                    <div className="address">
                        <div className="tittle">CHELAKKARA GRANITE</div>
                        <div className="sub-head">
                            {/* <img src={gmailIcon} alt="" /> */}
                           <div>E-mail :</div>
                        </div>
                        <div className="content"> 
                          <img src={gmailIcon} alt="" /> 
                        chelakkaracrusher@gmail.com</div>

                        <div className="sub-head">
                      
                            Mobile :</div>
                        <div className="content">
                        <img src={mobileIcon} alt="" /> 
                        +91 755 9988 733</div>

                        <div className="sub-head">
                        
                            Address :</div>
                        <div className="content"> 
                        <img src={addressIcon} alt="" />
                        Cholammakkavu ,Killimangalam PO, chelakkara, Kerala PIN:680591, India </div>
                        <a href="https://www.google.com/maps/dir//Chelakkara+Granites/@10.723251,76.2502685,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba7ddec6942bee9:0x90da4e06940f5da!2m2!1d76.3203091!2d10.7232588">Click here to view in Google map</a>

                    </div>

                    


                </div>

                <div className="callback-form-container">
                        <div className="form">
                            <div className="caption">We are here for you! how can we help ?</div>

                            <div className="form-item">
                                <Input placeholder="Enter your name" />
                            </div>

                            <div className="form-item">
                                <Input placeholder="Enter your email or phone number" />
                            </div>

                            <div className="form-item">
                                <TextArea rows={4} placeholder='Enter your message' />
                            </div>

                            <div className="form-item">
                            <Button type="primary" block>Submit </Button>
                            </div>

                        </div>

                        <div className="image">
                            <img src={animBaner} alt="" />
                        </div>
                    </div>

            </div>

            <Footer />
        </>
    )
}

export default ContactUs
