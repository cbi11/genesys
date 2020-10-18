import React from 'react'
import { Link } from 'react-router-dom'

function TextAndImage({header, text1, text2, taiImg, link, colorProperties, classProperties}) {
    return (
        <div className={colorProperties}>
            <div className={classProperties}>
                <div className={taiImg}></div>
                <div className="tai-content">
                    <h1 className="gp-title">{header}</h1>
                    <p>
                        {text1}
                        <br/>
                        <br/>
                        {text2}
                        <Link to="#">{link}</Link> 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TextAndImage
