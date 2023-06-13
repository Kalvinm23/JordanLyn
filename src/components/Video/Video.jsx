import React, {Fragment} from 'react';
import video from '../../asset/image/train.mp4'
import {Container} from "react-bootstrap";

function Video() {
    return (
        <Fragment>
            <div className="videoBackground">
                <video autoPlay muted loop>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="videoOverlay vw-100">
                <div className="videoContent align-items-center justify-content-center vw-100">
                    <Container>
                        <h1 className="videoTitle">Welcome to My Website</h1>
                        <h4 className="videoSubTitle">Enjoy the stunning video background!</h4>
                        <button className="videoButton mt-3" variant="primary">Contact Us</button>
                    </Container>
                </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Video;