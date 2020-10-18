import React from 'react'
import BlueNav from '../blueNav'
import JournalBackground from '../journalPageComponenets/journalBackground'
import JournalHero from '../journalPageComponenets/journalHero'
import TheJournals from '../journalPageComponenets/theJournals'
import UpToDate from '../upToDate'

function journal() {
    return (
        <div>
            <BlueNav/>
            <JournalHero/>
            <JournalBackground/>
            <TheJournals/>
            <UpToDate classColor="utd-yellow-body"/>
        </div>
    )
}

export default journal
