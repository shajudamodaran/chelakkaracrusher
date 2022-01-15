import React from 'react'
import { Link } from 'react-router-dom'
import MainRoute from '../../Routes/MainRoute'
import '../../Style/MainLayout/mainlayout.css'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

function MainLayout() {
    return (
        <div className='main-layout-container'>
            <Header />
        
            <MainRoute />

           

        </div>
    )
}

export default MainLayout
