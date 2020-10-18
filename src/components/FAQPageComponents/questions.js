import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Questions extends Component {
    state = {  
        questions: [
            {
                info: "How many people can attend a course?"
            },
            {
                info: "What's the learning experience like?"
            },
            {
                info: "Who are the coaches?"
            },
            {
                info: "How far in advance should we book?"
            },
            {
                info: "Can you customize your courses?"
            },
            {
                info: "Can you customize your courses?"
            },
            {
                info: "Can you customize your courses?"
            },
            {
                info: "Can you customize your courses?"
            },
            {
                info: "Can you customize your courses?"
            },
            {
                info: "Can you customize your courses?"
            },
            {
                info: "Can you customize your courses?"
            },
            {
                info: "Can you customize your courses?"
            },
            {
                info: "Can you customize your courses?"
            },
            {
                info: "Can you customize your courses?"
            },
            {
                info: "Can you customize your courses?"
            },

        ]
    }
    
    render() { 
        return (  
            <div className="f-body">
                <div className="f-b-shell">
                {this.state.questions.map((item, index) => {
                        return (
                        <div className="info-box" key={index}>
                            <Link to="#"><h4 className="faq-item">{item.info}</h4></Link><i class="fas fa-angle-down"></i>
                        </div>   
                        
                    )
                    })}
                </div>
            </div>
        );
    }
}
 
export default Questions;