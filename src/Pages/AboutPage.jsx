import React,{useState} from 'react'
import '../Style/Aboutpage/aboutpage.css'
import Footer from '../Components/Footer/Footer'
import businessImage from '../Assets/Images/business-leader.svg'
import { NextBtnIcon, PrevBtnIcon } from '../Assets/Icons/svgicons'

function AboutPage() {

    let[activeCert,setActiveCert]=useState(1)



    let certInctease=()=>{

       setActiveCert(activeCert+1)

    }

    let decreaseCert=()=>{

        setActiveCert(activeCert-1)
 
     }

    return (
        <>
            <div className="about-page-container">

                <div className="about-content">

                    <div className="item-head">
                        About Us
                    </div>

                    <div className="item-body">
                        <p>
                            We are the trusted manufactures of crusher products, Since 2012, at Chelakkara, Thrissur, India. Huge amount of satisfied customers are the strength of us, to work forward under the leadership of our managing partner Mr. K.R Viswanathan. our products are 6mm, 12mm, 20mm, Crushed granite sand (CG Sand) etc...
                        </p>

                        <p>
                            We have an excellent customer support for providing necessary service to our dear customers at any time. Our team assured that our product CG sand is sturdy and more profitable than traditional sand.
                        </p>

                        <div className='other-details'>
                            State Environmental Impact Assessment Authority Kerala <br />

                            Reg No : 855/SE1AA/ECI/2974/2015<br />

                            Dated, Thiruvananthapuram, 18/05/2017<br />

                            Environmental Clearance Number : 35/2017<br />

                        </div>
                    </div>


                    <div className="certificate-container">
                        <div className="certification-header">
                            Certificates
                        </div>


                        <div className="certificate-nav">
                            <div className="prev_btn" style={{visibility:activeCert<=1?"hidden":"visible"}} onClick={decreaseCert} ><PrevBtnIcon/></div>

                            <div className="certificate_image_container">
                                <img src={require(`../Assets/Images/certificates/c${activeCert}.jpg`)} alt="" />
                            </div>

                            <div className="next_btn" style={{visibility:activeCert>=13?"hidden":"visible"}} onClick={certInctease}><NextBtnIcon/></div>
                        </div>
                    </div>



                    <img src={businessImage} alt="" />

                </div>





            </div>
            <Footer />
        </>
    )
}

export default AboutPage
