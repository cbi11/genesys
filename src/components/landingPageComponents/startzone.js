import React from 'react'
import {Link} from 'react-router-dom'

function Startzone() {
    return (
        <div className="startzone">
                <div className="startzone-shell">
                    <div className="startzone-image"></div>
                    <div className="startzone-content">
                        <h1>Startzone</h1>
                        <p>The business environment is harsh for early-stage businesses. We can help you rise above it all.</p>
                        <Link to="#">LEARN MORE</Link>
                    </div>
            </div>

        </div>
    )
}

export default Startzone
