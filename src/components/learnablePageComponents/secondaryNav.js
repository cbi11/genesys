import React from 'react'
import { Link } from 'react-router-dom';
import image27 from '../images/image27.png'
import image28 from '../images/image28.png'
import image29 from '../images/image29.png'
import image30 from '../images/image30.png'
import image31 from '../images/image31.png'

function SecondaryNav() {
    return (
        <div className="secondary-nav">
            <div className="nav-list">
                <Link to="#"><h4 className="faq-item">Mentioned in</h4></Link>
                <div className="sponsors">
                    <img src={image27} />
                    <img src={image28}/>
                    <img src={image29}/>
                    <img src={image30}/>
                    <img src={image31}/>
                </div>

            </div>
        </div>
    )
}

export default SecondaryNav
