import React from 'react'
import BlueNav from '../blueNav'
import Hero from '../landingPageComponents/hero'
import ComingSoon from '../learnablePageComponents/comingSoon'
import GreatPeople from '../learnablePageComponents/greatPeople'
import Ranks from '../learnablePageComponents/ranks'
import SoftwarePath from '../learnablePageComponents/softwarePath'
import DesignPath from '../learnablePageComponents/designPath'
import TextAndImage from '../learnablePageComponents/textAndImage'
import UpToDate from '../upToDate'
import LearningIsFun from '../learnablePageComponents/learningIsFun'
import Experts from '../learnablePageComponents/experts'
import Faq from '../learnablePageComponents/faq'
import Journal from '../learnablePageComponents/journal'
import SecondaryNav from '../learnablePageComponents/secondaryNav'

function learnable() {
    return (
        <div>
            <BlueNav/>
            <ComingSoon/>
            <Hero title="Everything is Learnable"
                  subtitle="Learnable is the perfect product development internship program brought to you by Genesys.1"  
                  heroImage="hero-image two"  
                  heroTitle="hero-title big"
                  subAndCircles="subtitle-and-circles two"
                  circles="circles"
                  heroHeader="hero-header"
                  />
            <Ranks/>
            <GreatPeople/>      
            <TextAndImage header="An Unusual Learning Experience" 
                          text1="At Genesys, we believe in the learning processes as much as we believe in the results. 
                                By applying a combination of active and social learning methodologies, we create an 
                                environment that involves the learner in the learning process while providing avenues 
                                for collaboration and peer-to-peer mentorship."
                          text2="Our methods over the years have helped us discover ways to take education out of the 
                                classroom. We introduce our interns to learning by experimentation 
                                and problem-solving. To us, every task is an opportunity to learn."
                          taiImg="tai-img one"     
                          colorProperties="tai"
                          classProperties="tai-shell normal"
            />
            <SoftwarePath/>
            <DesignPath/>
            <TextAndImage  header="Who Is Eligible?"
                           text1="To be a participant of lernable, you need to be a young and passionate person interested 
                                in launching a super tech career. You will need to have foundational knowledge in whatever learning path you are applying for and be available for the six month duration of the program."  
                           text2="To become a part of the Genesys family, you must express some of the qualities we consider important. You are someone that takes responsibilities and initiatives. You will also express
                                the ability to produce quality stuff in good time with high consistency. "
                           classProperties="tai-shell reverse"  
                           colorProperties="tai white" 
                           taiImg="tai-img two"
            />

            <TextAndImage  header="Our Culture"
                            text1="Our culture are the unspoken things that make us who we are at Genesys. To become one of us, you need to be like the rest of us. We believe that excellence is a culture, and we are committed to a philosophy of consistent improvement in everything we do. We are passionate, candid and we trust in the power of collaboration."  
                            classProperties="tai-shell normal"  
                            colorProperties="tai orange" 
                            taiImg="tai-img three"
            />
            <LearningIsFun title="Learning Can Be Fun..."
                           text1="We believe learning should be a fun experience. For this reason, we don't do all the learning in the classroom" 
                           text2="The Learnable experience can not be complete without the bag of fun times which you’ll have. To us, every task is an opportunity to have some fun. But we do well to throw in a good number of activities to add to this. You will find yourself partaking in a lot of healthy activities such as cooking, sports, music, hangouts, and even random dates."
                           text3="Trust us when we say we know how to have fun."
                           learningImg="l-img1"
                           lCcontent="learning-content"
            />
            <Experts/>
            <LearningIsFun title="Learning Doesn't Always Have To Be In The Classroom"
                           text1 ="We have designed other learning activities that aren’t classroom-based. You will learn how to be a better person, how to have good conversations, how to work better with people and most importantly, how to lead other people. Hey! We’ll even teach you how to run a business during the Learnable Business Sessions." 
                           learningImg="l-img2"
                           lCcontent="learning-content2"
            
            />
            <TextAndImage  header="Apply Your Knowledge"
                            text1="Before you’re done with Learnable, you will apply everything you’ve learned. You’ll be part of a team made up of 2 designers and 4 developers. You’ll get to work alongside the Genesys team on projects and we’ll teach you how “the sauce” is made. By combining technology, design, and great ideas, your team will have the unique opportunity to collaborate with the Genesys team to bring your own concept to life, from the first pen sketches to the final functioning product. You’ll then get to show off your special project to everyone."  
                            classProperties="tai-shell normal"  
                            colorProperties="tai blue" 
                            taiImg="tai-img three"
                            link="GET STARTED"
            />
            <Faq/>
            <Journal/>
            <SecondaryNav />
            <UpToDate classColor="utd-yellow-body"/>


                           
        </div>
    )
}

export default learnable
