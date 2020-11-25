import React from 'react';
import noteTaker from '../../assets/images/noteTaker.png';
import freezer from '../../assets/images/freezer.png'
import Card from '../../components/Card/Card';
import './style.css'



const Portfolio = () => {
    return (
        <div>
            <div className="container">

                    <div className="row">
                        <div className="col">
                            <h1>Projects</h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                                <Card
                                    name="freezER"
                                image={freezer}
                            text="Ice cream store finder."                             
                            deployed="https://danieldrojas.github.io/gt-freezER/"
                            repository="https://github.com/danieldrojas/gt-freezER"
                                
                                />                      
                        </div>
                        <div className="col-sm-6">
                            <Card
                                name="NoteTaker"
                            image={noteTaker}
                            text="Keep your notes in one app for you to access anytime."
                            deployed="https://gt-note-taker-express-server.herokuapp.com/"
                            repository="https://github.com/danieldrojas/gt-note-taker"
                            />
                    </div>           
                </div>
            </div>
        </div>
    );
};

export default Portfolio;