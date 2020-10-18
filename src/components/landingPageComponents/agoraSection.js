import React from 'react'
import {Link} from 'react-router-dom'

export default function AgoraSection() {
    return (
        <div>
            <div className="agora-section">
                <div className="agora-shell">
                    <div className="agora-image"></div>
                    <div className="agora-content">
                        <h1>Agora</h1>
                        <p>We are reimagining the workplace and how people work. Find out how our co-working spaces can help you enjoy the work that you do.</p>
                        <Link to="#">LEARN MORE</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

