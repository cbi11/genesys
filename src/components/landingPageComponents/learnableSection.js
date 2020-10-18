import React from 'react'
import {Link} from 'react-router-dom'

function LearnableSection() {
    return (
        <div className="learnable-section">
            <div className="learnable-shell">
                <div className="learnable-image"></div>
                <div className="learnable-content">
                    <h1>Learnable</h1>
                    <p>Every year, young Nigerians are launching new careers in the technology industry. Find out how Genesys is helping them do it.</p>
                    <Link to="#">LEARN MORE</Link>
                </div>
            </div>
        </div>
    )
}

export default LearnableSection
