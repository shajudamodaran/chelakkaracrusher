import React from 'react'
import Footer from '../Components/Footer/Footer'
import OurProducts from '../Components/OurProducts/OurProducts'

function ProductsPage() {
    return (
       <>
        <div className='w-100 d-flex flex-row justify-content-center mb-5'>
            
            <OurProducts/>

        </div>

        <Footer/>
       </>
    )
}

export default ProductsPage
