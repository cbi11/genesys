import React from 'react'
import {Link} from 'react-router-dom'


function BestTeam() {
    return (
        <div>
            <div className="bestTeam-section">
                <div className="bestTeam-shell">
                    <div className="bestTeam-image"></div>
                    <div className="bestTeam-content">
                        <h1 className="bestTeam-header">The Best Team In The World</h1>
                        <p>Every year, young Nigerians are launching new careers in the technology industry. Find out how Genesys is helping them do it.</p>
                        <Link to="#">SEE TEAM</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestTeam
