import React from 'react'
import BlueNav from '../blueNav'
import DevAndDes from '../devAndDes'
import UpToDate from '../upToDate'

function learnableDeveloper() {
    return (
        <div>
            <BlueNav/>
            <DevAndDes title="The Learnable Software Developer"
                        text1="Creativity means a lot to us. So we look for people who can think both logistically and artistically, and who know that limits are made to be pushed. We value skill and aptitude, but we honor those who care about working with their team to add the Genesys flavour to every project. "
                        text2="As a developer, being part of the team exposes you to a range of diverse, like-minded talented people who are sure to make the experience fun for you. You’ll get a shot at building amazing things, developing yourself, learning on the job, while exchanging healthy jokes and having random hangouts once in a while."
                        quoteClass="quote"
                        quote="“You are someone people can count on. Every day, you come in ready to make great things happen.”"
                        imgName="small-image"
                        text4="Play nice with other people."
                        text5="Be an actively engaging person. That means you are present, motivated, and social. You know how to communicate effectively with your teammates."
                        text6="Love to code. You understand the basics of programming and object-oriented design and development."
                        text7="Have an eye for detail. Your keen observation helps you catch discrepancies and fix them quickly."
                        text8="Be innately curious. Your love for technology is insatiable, so you’re always researching and experimenting. Learning new technical skills while on the job is something you look forward to."
                        text9="Appreciate good design. You want to make something that doesn't just work flawlessly but looks amazing."
                        expImg="sysImage"
            />
            <UpToDate classColor="utd-yellow-body"/>

        </div>
    )
}

export default learnableDeveloper
