import React from 'react'
import { Link } from 'react-router-dom'

function OtherThingsWeDo() {
    return (
        <div className="the-others">
            <div className="the-others-shell">
                <div className="block-div">
                    <div className="ignite">
                        <div className="ignite-img"></div>
                        <h4><Link to="#">Genesys Ignite</Link></h4>
                    </div>
                    <div className="horizontal-blocks">
                        <div className="codeville">
                            <div className="codeville-img"></div>
                            <h5><Link to="#">CodeVille</Link></h5>
                        </div>
                        <div className="pink-summer">
                            <div className="pink-summer-img"></div>
                            <h5><Link to="#">Pink summer of code</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="the-others-content">
                    <h1>Other things we do</h1>
                </div>
            </div>    
        </div>
    )
}

export default OtherThingsWeDo
