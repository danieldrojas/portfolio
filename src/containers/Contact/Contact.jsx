import React from 'react';

const Contact = () => {
    return (
        <div>
            <div id="contact" className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1 >Contact</h1>
                        <ul>
                            <li><a id="contact-info"
                                rel="noopener noreferrer"
                                href="https://drive.google.com/file/d/1FUsOM4p9IUJKtx1M9-gD6ciSEHG58S5m/view?usp=sharing"
                                target="_blank">My resume</a>
                            </li>

                            <li><a id="contact-info"
                                rel="noopener noreferrer"
                                href="https://github.com/danieldrojas"
                                target="_blank">github.com/danieldrojas
                                 
                        </a></li>
                            <li><a id="contact-info"
                                rel="noopener noreferrer"
                                href="https://www.linkedin.com/in/daniel-drojas/"
                                target="_blank">linkedin.com/in/daniel-drojas</a>
                            </li>
                            <li><a id="contact-info"
                                href="mailto: daniel.drojas@outlook.com">daniel.drojas@outlook.com</a>
                            </li>
                            <li><span>Cellphone: 678-643-3731</span>
                            </li>
                            <li><span>Location: Duluth, GA</span>
                            </li>

                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
