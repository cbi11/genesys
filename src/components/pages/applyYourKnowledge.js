import React from 'react'
import Hero from '../apkPageComponents/hero'
import HowToApply from '../apkPageComponents/howToApply'
import BlueNav from '../blueNav'
import UpToDate from '../upToDate'


function applyYourKnowledge() {
    return (
        <div>
            <BlueNav/>
            <Hero/>
            <HowToApply/>
            <UpToDate classColor="utd-yellow-body"/>
        </div>
    )
}

export default applyYourKnowledge
