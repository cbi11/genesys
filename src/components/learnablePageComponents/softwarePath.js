import React from 'react'
import { Link } from 'react-router-dom'

function SoftwarePath() {
    return (
        <div className="path">
            <div className="path-shell">
                <div className="path-content">
                    <p className="overline">FOR DEVELOPERS</p>
                    <h1 className="gp-title">Learn To Build Software The Right Way</h1>
                    <p className="path-content-body">We love to build stuff. Really awesome stuff. 
                        That’s why we have developed a learning program 
                        that will empower you to create amazing software the right way. 
                        <br/>
                        <br/>
                        We believe in learning through experimentation. 
                        Our aim is to nurture and grow bright young minds from 
                        the get-go because that’s how our industry will thrive.</p>
                    <Link to="/the-learnable-software-developer">LEARN MORE</Link>
                </div>
                <div className="path-blocks">
                    <div className="b1">
                        <div className="block-shell">
                            <h3>Program With JavaScript</h3>
                        </div>
                    </div>
                    <div className="b2">
                        <div className="block-shell">
                            <h3>Version Control With Git</h3>
                        </div>
                    </div>
                    <div className="b3">
                        <div className="block-shell">
                            <h3>Web Development With React</h3>
                        </div>
                    </div>
                    <div className="b4">
                        <div className="block-shell">
                            <h3>Building APIs With NodeJS</h3>
                        </div>
                    </div>
                    <div className="b5">
                        <div className="block-shell">
                            <h3>Managing Data WIth MongoDB</h3>
                        </div>
                    </div>
                    <div className="b6">
                        <div className="block-shell">
                            <h3>Deploying With Heroku</h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SoftwarePath
