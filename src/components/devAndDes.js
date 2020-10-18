import React from 'react'
import Image from './image'
function DevAndDes({title, text1, text2, text3, text4, text5, text6, text7, text8, text9, text10, quote, quoteClass, imgName, expImg}) {
    return (
        <>
            <div className="dd-hero">
                <div className="dd-shell">
                    <div className="dd-content">
                        <h1 className="dd-title">{title}</h1>
                        <p className="dd-body">
                            {text1}
                            <br/>
                            <br/>
                            {text2}
                            <br/>
                            <br/>
                            {text3}
                        </p>
                    </div>
                    <div className="dd-image">
                        <Image imgClassName={imgName}/>
                    </div>
                </div>
            </div>
            <div className={quoteClass}>
                {quote}
            </div>
            <div className="expectations">
                <div className="expectations-shell">
                    <div className={expImg}></div>
                    <div className="expectations-body">
                        <h1 className="gp-title">We Expect You To...</h1>
                        <div className="exp-lists">
                            <p>{text4}</p>
                            <p>{text5}</p>
                            <p>{text6}</p>  
                            <p>{text7}</p>    
                            <p>{text8}</p>    
                            <p>{text9}</p>    
                            <p>{text10}</p>    
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DevAndDes
