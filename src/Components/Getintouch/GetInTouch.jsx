import { Button, Input } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import React from 'react'
import './geintouch.css'
import animBaner from '../../Assets/Images/Banner/banner1.jpg'

function GetInTouch() {
    return (
        <div className='form-container'>
            <div className="header">
                GET IN TOUCH
            </div>

            <div className="caption">
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, eius. Iste earum iusto mollitia <br></br>
                quos expedita ea labore quis unde recusandae? Modi blanditiis veniam autem. */}
            </div>
            <div className="underline"></div>

            <div className="callback-form-container">
                <div className="form">
                    <div className="caption">We are here for you! how can we help ?</div>

                    <div className="form-item">
                        <Input placeholder="Enter your name" />
                    </div>

                    <div className="form-item">
                        <Input placeholder="Enter your email or phone number" />
                    </div>

                    <div className="form-item">
                        <TextArea rows={4} placeholder='Enter your message' />
                    </div>

                    <div className="form-item">
                        <Button type="primary" block>Submit </Button>
                    </div>

                </div>

                <div className="image">
                    <img src={animBaner} alt="" />
                </div>
            </div>

        </div>
    )
}

export default GetInTouch
