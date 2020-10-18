import React from 'react';
import topArrow from '../components/images/topArrow.png'

function UpToDate({classColor}) {
    return (
        <div className="utd">
            <div className="utd-shell">
                <img className="arrow-up" src={topArrow} width="19px" height="40px"/>
                <div className={classColor}>
                    <h1>Stay up to date on what we are doing and new learning opportunities</h1>
                    <div className="input">
                        <input placeholder="YOUR EMAIL"></input>
                        <p>View Privacy Policy</p>
                    </div>
                    <div className="sub-btn">
                        SUBSCRIBE
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default UpToDate
