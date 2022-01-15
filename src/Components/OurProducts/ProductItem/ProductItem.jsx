import React from 'react'
import './productitem.css'

function ProductItem({variant,name,caption}) {
    return (
        <div className='product-item-container'>

            <div className={`product ${variant}`}>
                <div className="product-details">
                    <span>{name} </span>
                    <div className="caption">{caption}</div>
                    <button>Details</button>
                </div>
            </div>

        </div>
    )
}

export default ProductItem
