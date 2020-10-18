import React from 'react'
import { Link } from 'react-router-dom'

function BlueNav() {
    return (
        <div className="blue-nav">
            <div className="blue-links">
                <Link to="/learnable">HOME</Link>
                <Link to="/the-learnable-software-developer">SOFTWARE DEVELOPERS</Link>
                <Link to ="/the-learnable-software-designer">PRODUCT DESIGNER</Link>
                <Link to="apply-your-knowledge">APPLY</Link>
                <Link to="/journal">JOURNAL</Link>
                <Link to="/FAQ">FAQ</Link>
            </div>
        </div>
    )
}

export default BlueNav
