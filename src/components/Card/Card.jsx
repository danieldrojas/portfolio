import React from 'react';

const Card = (props) => {
    return (
        <div className="container">
            <div className="col-sm-6" style={{ padding: "35px" }}>             
                <img alt="thumbnail" style={{ width: "300px" }} className="image-main"
                    src={props.image} />
                <span>{props.text}</span>
                <div id="text-image-main"><a
                    href={props.deployed}
                    rel="noopener noreferrer"
                    target="_blank">{props.name}</a>
                    <div><a href={props.repository}
                        rel="noopener noreferrer"
                        target="_blank">Repository</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;