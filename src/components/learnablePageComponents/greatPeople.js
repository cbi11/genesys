import React from 'react'
import Image from '../image'
function GreatPeople() {
    return (
        <div className="great-people">
            <div className="gp-shell">
                <div className="gp-content">
                    <h1 className="gp-title">We Make People Great</h1>
                    <p className="gp-text">As part of our calculated efforts to contribute to the emerging knowledge and skills driven economy of Nigeria, 
                        Learnable is a 6-month product development training program with an emphasis on software programming and product 
                        design. It is for outstanding young individuals who are passionate about building a career in the software industry.<br/>
                        <br/> 
                        We primarily educate and groom software developers and designers, preparing them for the industry. </p>
                </div>
                <div className="gp-image">
                    <Image imgClassName="img-shell"/>
                </div>
            </div>
        </div>
    )
}

export default GreatPeople
