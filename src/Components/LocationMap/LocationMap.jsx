import React from 'react'
import './locationmap.css'
import mapImage from '../../Assets/Images/Map/map.png'

function LocationMap() {
    return (
        <div className='location-container'>
            <div className="header">
                LOCATION MAP
            </div>

            <div className="caption">
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, eius. Iste earum iusto mollitia <br></br>
                quos expedita ea labore quis unde recusandae? Modi blanditiis veniam autem. */}
            </div>
            <div className="underline"></div>

            <div className="item-body">

                <img src={mapImage} alt="" />

            </div>

        </div>
    )
}

export default LocationMap
