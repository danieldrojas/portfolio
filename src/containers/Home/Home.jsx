import React from 'react';
import profilePicture from '../../assets/images/fixedphoto.png';
import './style.css'

const styles = {

    iconSize: {
        fontSize: 30,
        maginBotton: 30


    },
}

const Home = () => {
    return (
        <div >
            <div className="container">
                <div className="row" style={{ marginTop: "40px" }}>
                    <div className="col text-center">
                        <img style={{ width: "300px" }} className="rounded-circle img-fluid text-center"
                            src={profilePicture} alt="profile" />
                        <p className="text-center">Hi there, my name is Daniel, and I'm a
                        full-stack web
                        developer having graduated from Georgia Tech's Full-Stack Bootcamp, as well as, a
                        degreed Chemical Engineer. I'm interested in
                        all parts of front-end and back-end development and I enjoy
                        building products that are relevant and creative.
                        In my free time I enjoy DIY projects, all water
                        activities, and spending time with my wife and
                        friends. I'm also fluent in Spanish and English.
                </p>
                        <div className="row">
                            <div className="col d-flex justify-content-center">

                                <a style={styles.iconSize} rel="noopener noreferrer" href="https://www.linkedin.com/in/daniel-drojas/"
                                    className="fa fa-linkedin mx-2" target="_blank"></a>
                                <a style={styles.iconSize} rel="noopener noreferrer" href="https://github.com/danieldrojas"
                                    className="fa fa-github mx-2" target="_blank"></a>
                                <a style={styles.iconSize} rel="noopener noreferrer" href="https://twitter.com/DD_Rojas" className="fa fa-twitter mx-2"
                                    target="_blank"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <footer>
            <div className="bg-dark">
                <div id="rights">
                    <h4>COPYRIGHT</h4>
                    <h5>Daniel Rojas</h5>
                </div>
                </div>

    </footer>     */}

        </div>
    );
};

export default Home;