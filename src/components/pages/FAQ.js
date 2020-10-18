import React from 'react'
import BlueNav from '../blueNav'
import FaqHero from '../FAQPageComponents/faqHero'
import Questions from '../FAQPageComponents/questions'
import UpToDate from '../upToDate'

function FAQ() {
    return (
        <div>
            <BlueNav/>
            <FaqHero/>
            <Questions/>
            <UpToDate classColor="utd-yellow-body"/>
        </div>
    )
}

export default FAQ
