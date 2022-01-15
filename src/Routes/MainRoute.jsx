import React from 'react'

import {
    Routes,
    Route
} from "react-router-dom";


import AboutPage from '../Pages/AboutPage';
import ContactUs from '../Pages/ContactUs';
import HomePage from '../Pages/HomePage';
import ProductsPage from '../Pages/ProductsPage';

function MainRoute() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="products" element={<ProductsPage />} />
        </Routes>
    )
}

export default MainRoute
