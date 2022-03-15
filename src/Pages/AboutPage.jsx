import React, { useState } from 'react'
import '../Style/Aboutpage/aboutpage.css'
import Footer from '../Components/Footer/Footer'
import businessImage from '../Assets/Images/business-leader.svg'
import { NextBtnIcon, PrevBtnIcon } from '../Assets/Icons/svgicons'
import { resources } from '../Assets/Resources/resources'

function AboutPage() {

    let [activeCert, setActiveCert] = useState(1)



    let certInctease = () => {

        setActiveCert(activeCert + 1)

    }

    let decreaseCert = () => {

        setActiveCert(activeCert - 1)

    }

    let downloadReport = (file) => {

        window.open(file, "_blank")
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
                            <div className="prev_btn" style={{ visibility: activeCert <= 1 ? "hidden" : "visible" }} onClick={decreaseCert} ><PrevBtnIcon /></div>

                            <div className="certificate_image_container">
                                <img src={require(`../Assets/Images/certificates/c${activeCert}.jpg`)} alt="" />
                            </div>

                            <div className="next_btn" style={{ visibility: activeCert >= 13 ? "hidden" : "visible" }} onClick={certInctease}><NextBtnIcon /></div>
                        </div>
                    </div>


                    <div className="other-resources">
                        <div className="certification-header">
                            Other Resources
                        </div>


                        <table className='resource-table'>
                            <tr>
                                <th>Sl.No</th>
                                <th>Name</th>
                                <th>Uploaded Date</th>
                                <th>View</th>
                            </tr>

                            <tr>
                                <td>1</td>
                                <td><b>Second Half Compliance Report</b><br /> For the period up to October 2018- March 2019</td>
                                <td>16 March 2022</td>
                                <td><img onClick={() => { downloadReport(require('../Assets/Resources/1.pdf')) }} className='pdf-icon' src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg" alt="" /></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td><b>First Half Compliance Report</b> <br /> For the period April 2019 – September 2019</td>
                                <td>16 March 2022</td>
                                <td><img onClick={() => { downloadReport(require('../Assets/Resources/2.pdf')) }} className='pdf-icon' src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg" alt="" /></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td><b>Second Half Compliance Report</b>  <br /> For the period up to October 2019 – March 2020</td>
                                <td>16 March 2022</td>
                                <td><img onClick={() => { downloadReport(require('../Assets/Resources/3.pdf')) }} className='pdf-icon' src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg" alt="" /></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td><b>First Half Compliance Report</b>  <br /> For the period April 2020 – September 2020</td>
                                <td>16 March 2022</td>
                                <td><img onClick={() => { downloadReport(require('../Assets/Resources/4.pdf')) }} className='pdf-icon' src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg" alt="" /></td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td><b>Second Half Compliance Report</b>  <br /> For the period up to October 2020 – March 2021</td>
                                <td>16 March 2022</td>
                                <td><img onClick={() => { downloadReport(require('../Assets/Resources/5.pdf')) }} className='pdf-icon' src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg" alt="" /></td>
                            </tr>

                            <tr>
                                <td>6</td>
                                <td><b>First Half Compliance Report</b>  <br /> For the period April 2021 – September 2021</td>
                                <td>16 March 2022</td>
                                <td><img onClick={() => { downloadReport(require('../Assets/Resources/6.pdf')) }} className='pdf-icon' src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg" alt="" /></td>
                            </tr>


                        </table>


                        <div className="resource-table-small">

                            {
                                resources.length > 0 ?

                                    resources.map((element, key) => {

                                        return (
                                            <div className="resource-card">

                                                <div dangerouslySetInnerHTML={{__html:element.name }}/>

                                                <div className="download">
                                                    <img onClick={() => { downloadReport(require(`../Assets/Resources/${element.fileName}`)) }} className='pdf-icon' src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg" alt="" />

                                                </div>

                                            </div>
                                        )

                                    })

                                    : null
                            }



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
