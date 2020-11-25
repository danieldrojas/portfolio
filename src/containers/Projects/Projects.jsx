import React from 'react';
import bootCampConnect from '../../assets/images/bootCampConnect.png';
import linquick from '../../assets/images/quiz.png'
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
                                    name="Linquick"
                                image={linquick}
                            text="Learn Korean and score your fluency against others with this Full Stack MERN application"                             
                                    deployed="https://linguick.herokuapp.com/"
                                    repository="https://github.com/danieldrojas/Linguick"
                                
                                />                      
                        </div>
                        <div className="col-sm-6">
                            <Card
                                name="BootCampConnect"
                            image={bootCampConnect}
                            text="Networking application for bootcamp graduates"
                                deployed="https://git-bootcamp-connect.herokuapp.com/"
                                repository="https://github.com/danieldrojas/gt-bootcamp-connect"
                            />
                    </div>           
                </div>
            </div>
        </div>
    );
};

export default Portfolio;