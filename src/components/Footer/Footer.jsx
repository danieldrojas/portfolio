import React from 'react';
import './style.css'

const Footer = () => {
    return (
        <div id="footer">
            <div className="container">
                <div  className="row">
                    <div className="col  text-center">
                        <span>Contact</span>
                        <div className="col">
                            daniel.drojas@outlook.com
                     </div>
                        <div className="col">
                            Phone: +1 678-643-3731
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <span><small>Copyright © 2020 Daniel D. Rojas. All rights reserved</small></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;