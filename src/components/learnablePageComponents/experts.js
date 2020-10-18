import React, { Component } from 'react';

class Experts extends Component {
    state = {  
        infoGroup: [
            {
                imgTitle: "photo-one",
                name: "Nnamdi",
                position: "Managing Director"
            },
            {
                imgTitle: "photo-two",
                name: "Ositadinma",
                position: "Learnable Coordinator"
            },
            {
                imgTitle: "photo-three",
                name: "Idowu",
                position: "Scrum Proffessional"
            },
            {
                imgTitle: "photo-four",
                name: "Ezra",
                position: "Ass. Learnable Coordinator"
            },
            {
                imgTitle: "photo-five",
                name: "David",
                position: "Design Lead"
            },
            {
                imgTitle: "photo-six",
                name: "Emmanuel",
                position: "Software Lead"
            }
        ]
    }
    render() { 
        return (  
            <div className="learn-from-experts">
                <div className="lfe-shell">
                    <div className="lfe-photos">
                        {this.state.infoGroup.map((info, index) => {
                            return(
                                <div className="group" key={index}>
                                    <div className={info.imgTitle}></div>
                                    <h6>{info.name}</h6>
                                    <p className="position">{info.position}</p>
                                </div>    
                            )
                        })}
                    </div>
                    <div className="lfe-content">
                        <h1 div className="gp-title">Learn from the Experts</h1>
                        <p>As a learnable intern, you will be learning from the best software developers and product designers our industry has to offer. You will spend the first 3 months in the classroom with industry experts who have a wealth of experience from developing amazing products for various customers in our industry.</p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Experts;