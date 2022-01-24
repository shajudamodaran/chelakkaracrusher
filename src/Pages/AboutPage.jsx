import React from 'react'
import '../Style/Aboutpage/aboutpage.css'
import Footer from '../Components/Footer/Footer'
import businessImage from '../Assets/Images/business-leader.svg'

function AboutPage() {
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

                    <img src={businessImage} alt="" />

                </div>



            </div>
            <Footer />
        </>
    )
}

export default AboutPage
