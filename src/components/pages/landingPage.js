import React from 'react'
import Hero from '../landingPageComponents/hero'
import LearnableSection from '../landingPageComponents/learnableSection'
import AgoraSection from '../landingPageComponents/agoraSection'
import Startzone from '../landingPageComponents/startzone'
import OtherThingsWeDo from '../landingPageComponents/otherThingsWeDo'
import BestTeam from '../landingPageComponents/bestTeam'
import UpToDate from '../upToDate'

function landingPage() {
    return (
        <div>
            <Hero title="Genesys provides opportunities for young Nigerian techies and opportunities to grow and innovate."
                  subtitle="We understand that opportunities are scarce in these parts. We are either creating or exposing our people to these opportunities."  
                  heroImage="hero-image"  
                  heroTitle="hero-title"
                  subAndCircles="subtitle-and-circles"
                  circles="circles two"
                  heroHeader="hero-header-2"
            />
            <LearnableSection />
            <AgoraSection />
            <Startzone />
            <OtherThingsWeDo />
            <BestTeam />
            <UpToDate classColor="utd-body"/>
        </div>
    )
}

export default landingPage
