import React, { Component } from 'react';
import logo from './images/logo.png'
import {Link} from 'react-router-dom'

class Navbar extends Component {
    state = {  
        isOpen: false
    }
    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() { 
        return (  
            <div className="navbar">
                <div className="nav-center">
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} width="170px" height="38px" />
                        </Link>
                    </div>
                    <ul className="nav-links">
                        <Link to="/learnable">
                            LEARNABLE
                        </Link>
                        <li>AGORA</li>
                        <li>STARTZONE</li>
                        <li>ABOUT</li>
                        <li>CONTACT</li>
                    </ul>
                    <div className="nav-buttons">
                        <div className="capt">
                            build a product with
                        </div>
                        <button type="button" className="dev-studio-btn">
                            DEV STUDIO
                        </button>
                    </div>
                    <div className="burger" id="burger" onClick={this.handleToggle}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                    <div id="mobile_menu" className={this.state.isOpen?"overlay show":"overlay"}>
                        <div className="overlay_content">
                            <div className="logo-and-close-button">
                                <div className="close-button" id="cls" onClick={this.handleToggle}>+</div>
                    
                            </div>
                            <div className="overlay-links">
                                <Link to="/learnable" onClick={this.handleToggle}>LEARNABLE</Link>
                                <Link to="/the-learnable-software-developer" onClick={this.handleToggle}>SOFTWARE DEVELOPER</Link>
                                <Link to="/the-learnable-software-designer" onClick={this.handleToggle}>PRODUCT DESIGNERS</Link>
                                <Link to="/apply-your-knowledge" onClick={this.handleToggle}>APPLY</Link>
                                <Link to="/journal" onClick={this.handleToggle}>JOURNAL</Link>
                                <Link to="/FAQ" onClick={this.handleToggle}>FAQ</Link>
                            </div>
                        </div>
                    </div>                    

                </div>
            </div>
       
        );
    }
}
 
export default Navbar;