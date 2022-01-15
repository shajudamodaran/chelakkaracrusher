import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CloseIcon, MailIcon, OpenNavSmall, PhoneIcon } from '../../Assets/Icons/svgicons'
import './header.css'
import logo from '../../Assets/Images/logo.png'

function Header() {

    let [isLeft, setLeft] = useState(false)


    let [activeRoute,setActiveRoute]=useState(useLocation())

    let routes=['/', '/about', '/contact', '/products']

    console.log(activeRoute.pathname);

    let nav=useLocation()

    useEffect(() => {
      setActiveRoute(nav)
    }, [nav])


    return (
        <div className="header-main-container">

            <div className='header-container'>

                <div className="header-item">

                    <div className="header-item-icon">
                        <MailIcon />
                    </div>

                    <div className="header-item-text">
                        chelakkaracrusher@gmail.com
                    </div>

                </div>

                <div className="header-item">

                    <div className="header-item-icon">
                        <PhoneIcon />
                    </div>

                    <div className="header-item-text">
                        +91 944 729 3773
                    </div>

                </div>

            </div>

            <div className="header-navigator">

                <div className="header-logo">
                    <img src={logo} alt="" />
                    <span>Chelakkara Granite</span>
                </div>

                <ul className='for-web'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="about">About Us</Link>
                    </li>
                    <li>
                        <Link to="products">Products</Link>
                    </li>
                    <li>
                        <Link to="contact">Contact US</Link>
                    </li>
                </ul>

                <div onClick={() => { setLeft(!isLeft) }} className="for-mobile">
                    <OpenNavSmall />
                </div>

                <div className={`responsive-sidebar ${isLeft ? 'visible' : 'hidden'}`}>

                    {/* <div className="close-container" onClick={() => { setLeft(!isLeft) }}>
                        <CloseIcon/>
                    </div> */}
                    <div className='w-100'  >

                        <ul>
                            <li className={activeRoute.pathname==routes[0]?'active':null} onClick={() => { setLeft(!isLeft) }}>
                                <Link to="/">Home</Link>
                            </li>
                            <li className={activeRoute.pathname==routes[1]?'active':null} onClick={() => { setLeft(!isLeft) }}>
                                <Link to="about">About Us</Link>
                            </li>
                            <li className={activeRoute.pathname==routes[3]?'active':null} onClick={() => { setLeft(!isLeft) }}>
                                <Link to="products">Products</Link>
                            </li>
                            <li className={activeRoute.pathname==routes[2]?'active':null} onClick={() => { setLeft(!isLeft) }}>
                                <Link to="contact">Contact US</Link>
                            </li>
                        </ul>

                    </div>
                </div>




            </div>

        </div>

    )
}

export default Header
