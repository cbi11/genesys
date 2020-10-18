import React from 'react'
import arrow from '../images/arrow.png'
import {Link} from 'react-router-dom'
import {FaPlayCircle} from 'react-icons/fa'
function hero({circles, title, subtitle, heroImage, heroHeader, heroTitle, subAndCircles}) {
    return (
        <div className="hero">
            <div className={heroHeader}>
                <h1 className={heroTitle}>{title}</h1>
                <div className={subAndCircles}>
                    <p className="hero-subtitle">{subtitle}</p>
                    <div className={circles}>
                        <div className="c1">
                            <h5><Link to="#">Development</Link></h5>
                            <p>What to expext</p>
                        </div>
                        <div className="c2">
                        <h5><Link to="#">Product Design</Link></h5>
                            <p>What to expext</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="arrow-and-hero-image">
                <img className="arrow-down" src={arrow} width="19px" height="40px"/>
                <div className={heroImage}>
                    <FaPlayCircle className="play-btn" />
                </div>
            </div>
        </div>
    )
}

export default hero
