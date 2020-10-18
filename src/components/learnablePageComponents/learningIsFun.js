import React from 'react'

function LearningIsFun({title, text1, text2, text3, lCcontent, learningImg}) {
    return (
        <div className="learning">
            <div className="learning-shell">
                <div className={lCcontent}>
                    <h1 className="gp-title">{title}</h1>
                    <p>
                        {text1}
                        <br/>
                        <br/>
                        {text2}
                        <br/>
                        <br/>
                        {text3}
                    </p>
                </div>
                <div className={learningImg}></div>
            </div>
        </div>
    )
}

export default LearningIsFun
