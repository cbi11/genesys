import React from 'react'
import { Link } from 'react-router-dom'

function DesignPath() {
    return (
        <div>
            <div className="path grey">
                <div className="path-shell design">
                    <div className="path-content pcb">
                        <p className="overline">FOR DESIGNERS</p>
                        <h1 className="gp-title">Design Different</h1>
                        <p className="path-content-body">We love to make things
                        work perfectly. That’s why our design learning path 
                        exposes you to the science of user-oriented design.
 
                            <br/>
                            <br/>
                            Design is at the heart of everything we do at Genesys. 
                            Right from the start of the program, you’ll get your hands dirty as 
                            you get practically involved in the world’s most modern design concepts. 
                            At Genesys, we’re building designers who put the users first.</p>
                        <Link to="/the-learnable-software-developer">LEARN MORE</Link>
                    </div>
                    <div className="path-blocks">
                        <div className="b1">
                            <div className="block-shell">
                                <h3>Design User Interfaces</h3>
                            </div>
                        </div>
                        <div className="b6">
                            <div className="block-shell">
                                <h3>Craft User Experience</h3>
                            </div>
                        </div>
                        <div className="b3">
                            <div className="block-shell">
                                <h3>Apply Design Thinking</h3>
                            </div>
                        </div>
                        <div className="b5">
                            <div className="block-shell">
                                <h3>Build Informtion Architecture</h3>
                            </div>
                        </div>
                        <div className="b0">
                            <div className="block-shell">
                                <h3>Copy Write For Projects</h3>
                            </div>
                        </div>
                        <div className="b2">
                            <div className="block-shell">
                                <h3>Brand Products</h3>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default DesignPath
