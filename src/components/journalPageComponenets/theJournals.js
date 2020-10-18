import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TheJournals extends Component {
    state = {  
        theJournals: [
              {
                imgClass: "j-im1",
                overline: "INSPIRATION",
                text: "Learn Design Thinking Like A Pro And Build Projects That People Will Care About",
                underline: "David Mong, Apr 9, 2020"
              },
              {
                imgClass: "j-im2",
                overline: "INSPIRATION",
                text: "Learn Design Thinking Like A Pro And Build Projects That People Will Care About",
                underline: "David Mong, Apr 9, 2020"
              },
              {
                imgClass: "j-im3",
                overline: "INSPIRATION",
                text: "Learn Design Thinking Like A Pro And Build Projects That People Will Care About",
                underline: "David Mong, Apr 9, 2020"
              },
              {
                imgClass: "j-im4",
                overline: "INSPIRATION",
                text: "Learn Design Thinking Like A Pro And Build Projects That People Will Care About",
                underline: "David Mong, Apr 9, 2020"
              }
        ]
    }
    
    render() { 
        return (  
            <div className="the-journals">
                <div className="the-journal-shell">
                    {
                        this.state.theJournals.map((item, index) => {
                            return(
                                <div className="journal-item" key={index}>
                                    <div className={item.imgClass}></div>
                                    <Link to="#">{item.overline}</Link>
                                    <h3>{item.text}</h3>
                                    <p>{item.underline}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="shell2">
                  {
                          this.state.theJournals.map((item, index) => {
                            return(
                                <div className="journal-item" key={index}>
                                    <div className={item.imgClass}></div>
                                    <Link to="#">{item.overline}</Link>
                                    <h3>{item.text}</h3>
                                    <p>{item.underline}</p>
                                </div>
                            )
                        })
                  }
                </div>
                <div className="load-more-btn">
                    LOAD MORE
                </div>
            </div>
        );
    }
}
 
export default TheJournals;