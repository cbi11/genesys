import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Faq extends Component {
    state = {  
        faq: [
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
        ]
    }
    
    render() { 
        return (  
        <div className="faq">
            <div className="faq-content">
                <div className="faq-header">
                    <h1 className="gp-title">FAQ</h1>
                </div>
                <div className="faq-body">
                    {this.state.faq.map((item, index) => {
                        return (
                        <div className="info-box" key={index}>
                            <Link to="#"><h4 className="faq-item">{item.info}</h4></Link><i class="fas fa-angle-down"></i>
                        </div>   
                        
                    )
                    })}
                </div>
                <Link to="#">SEE ALL</Link>
            </div>
        </div>
        );
    }
}
 
export default Faq;