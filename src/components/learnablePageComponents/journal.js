import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Journal extends Component {
  state = {  
      journal:[
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
          },

      ]
  }
    
    render() { 
        return (  
            <div className="journal">
                <div className="journal-shell">
                    <div className="journal-header">
                        <h1 className="gp-title">Journal</h1>
                        <Link to="#">VIEW ALL</Link>
                    </div>
                    <div className="journal-list">
                        {this.state.journal.map((item, index) => {
                            return(
                                <div className="journal-block" key="index">
                                    <div className={item.imgClass}></div>
                                    <Link to="#">{item.overline}</Link>
                                    <h3>{item.text}</h3>
                                    <p>{item.underline}</p>
                                </div>   
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Journal;