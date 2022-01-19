import React from 'react'
import './ourproducts.css'
import ProductItem from './ProductItem/ProductItem'

function OurProducts() {
    return (
        <div className='our-product-container'>
            <div className="header">
                OUR PRODUCTS
            </div>

            <div className="caption">
            We are the trusted manufactures of crusher products, Since 2012, at Chelakkara, Thrissur, India. Huge amount of satisfied customers are the strength of us
            </div>
            <div className="underline"></div>

            <div className="products-list">
                <ProductItem variant="mm6" name="6mm"/>
                <ProductItem variant="mm12" name="12mm"/>
                <ProductItem variant="mm20" name="20mm"/>

                <ProductItem variant="cs" name="Crystal Sand"  caption="Exclusively for Concreating" />
                <ProductItem variant="gs" name="Grand Sand" caption="Exclusively for Plastering"/>
            </div>
        </div>
    )
}

export default OurProducts
