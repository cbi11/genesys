import React from 'react'
import { Link } from 'react-router-dom'

function ComingSoon() {
    return (
        <div className="yellow-header">
            <div className="close">+</div>
            <div className="text">
                <h3>Coming Soon: Learnable '20</h3>
                <p className="yellow-subtitle">We've started taking in applications for the next batch of learnable interns. Applications are on till the 21st of Febuary</p>
            </div>
            <div className="btns">
                <p>click here to download...</p>
                <Link to="#"><h3>Learnable '20 Brochure</h3></Link>
            </div>
        </div>
    )
}

export default ComingSoon
