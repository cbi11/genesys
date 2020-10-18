import React from 'react'
import BlueNav from '../blueNav'
import DevAndDes from '../devAndDes'
import UpToDate from '../upToDate'


function learnableDesigner() {
    return (
        <div>
            <BlueNav/>
            <DevAndDes  title="The Learnable Product Designer"
                        text1="At Genesys, you'll be exposed to every discipline in our creative process – UX, UI, interaction design, and copywriting. You’ll be part of a dynamic team that's made up of like-minded, talented people. You'll work hard with them to create things that will amaze everyone everywhere."
                        text2="In addition to your team projects, you’ll be lending a hand to the creative team. Participating in brainstorm sessions, building winning pitches, preparing assets, and design scriptures for productions, you'll be in the thick of it all."
                        text3="Oh, and you’ll make amazing friends while you're at it!"
                        imgName="small-orange"
                        quote="“The greats weren’t great because at birth they could paint. The greats were great because they painted a lot.” 
                        - Macklemore"
                        quoteClass="orange-quote"
                        expImg="colorImage"
                        text4="Play nice with other people."
                        text5="Be an actively engaged person. That means you are present, motivated, and social."
                        text6="Understand how to use the Figma design software"
                        text7="Be able to create initial design layouts with confidence and know-how to effectively communicate concepts to everyone on your team."
                        text8="Have a basic understanding of design principles and theories
                        To have creative courage. This is a tough industry, only the brave and sturdy remain."
                        text9="Be prepared to defend your decisions and take constructive criticism."
                        text10="To us, beauty without substance has no value. At Genesys, design thinking and execution are equally important, so we’re constantly on the lookout for not only the how but also the why."
            />
            <UpToDate classColor="utd-yellow-body"/>
        </div>
    )
}

export default learnableDesigner
