import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class HowToApply extends Component {
    state = {  
        application: [
            {
                title: "How To Appy",
                content: "We are very deliberate with our selection process. We are on a quest to find amazing people who are passionate about learning and growing their careers in the software industry. To this end, we have designed our selection process to help us get such people."
            },
            {
                title: "Online Application",
                content: "Introduce yourself to us by filling out our application form. When you’re done filling out the form, proceed to download our prep curriculum that contains everything you need to prepare for the physical and technical assessment.",
                link: "APPLY HERE"
            },
            {
                title: "Phone Call Interviews",
                content: "We will reach out to you to discuss possible opportunities, ascertain where you fit in with us, and answer any questions you might have about the program. It’s supposed to be a chat, getting nervous defeats the aim."
            },
            {
                title: "Final Assessment",
                content: "At this stage, we’ll get to meet you in person for the first time. You’ll be invited to the hub for a physical assessment that includes a technical assessment, a psychometric test and a face-to-face chat with our team."
            },
            {
                title: "Get In",
                content: "If you make it to this stage, you can pack your bags and head down to the beautiful city of Enugu. We will join you on your journey to build that career of your dreams and provide all the help, support and love that we can muster along the way!"
            },
        ]
    }
    
    render() { 
        return (  
            <div className="how-to-apply">
                <div className="hta-shell">
                    <div className="hta-image"></div>
                    <div className="hta-content">
                        {
                            this.state.application.map((item, index) => {
                                return(
                                    <div className="hta-item">
                                        <h1 className="gp-title">{item.title}</h1>
                                        <p>{item.content}</p>
                                        <Link to="#">{item.link}</Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}
 
export default HowToApply;