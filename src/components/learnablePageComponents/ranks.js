import React, { Component } from 'react';

class Ranks extends Component {
    state = {  
        ranks:[
            {
                rankNumber: "305",
                rankTitle: "Young Software Developers Trained"
            },
            {
                rankNumber: "2100",
                rankTitle: "Tech Enthusiasts"
            },
            {
                rankNumber: "8",
                rankTitle: "StartUps Incubated"
            },
            {
                rankNumber: "250",
                rankTitle: "Small Businesses suported"
            }
        ]
}
    render() { 
        return (  
            <div className="ranks">
                <div className="rank-lists">
                    {
                        this.state.ranks.map((item, index) =>{
                            return(
                                <div className="rank-item" key={index}>
                                    <h3 className="green-title">{item.rankNumber}</h3>
                                    <p className="rank-text">{item.rankTitle}</p>
                                </div>    
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}
 
export default Ranks;