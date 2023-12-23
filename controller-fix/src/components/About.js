import React from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,
    MDBTypography
} from 'mdb-react-ui-kit';

const About = () => {
    return (
        <MDBContainer className="my-5">
            <MDBTypography tag='h1' className='text-center mb-4 pb-2 text-primary fw-bold'>
                About
            </MDBTypography>
            <MDBRow className='justify-content-center'>
                <MDBCol md='8'>
                    <MDBCard alignment='center'>
                        <MDBCardBody>
                            <MDBCardTitle className='text-primary'>
                                Why fix controllers?
                            </MDBCardTitle>
                            <MDBCardText className='text-start'>
                                With a passion for both software development and retro gaming, I've found a unique niche in repairing and optimizing controllers. My background is in software engineering which makes me want to ensure that every controller I fix not only works but works better than it did before. This project is a personal challenge to document the process and share the results with a community of gamers and tech enthusiasts.
                            </MDBCardText>
                            <MDBCardText className='text-start'>
                                I loved the Nintendo 64 growing up and have recently been playing it a lot and when I first tried to fix my controller it totally changed my experience revisiting my childhood and I really want to share that with others too.
                            </MDBCardText>
                            <MDBCardText className='text-start'>
                                I hope you find these insights and results both informative and fun!
                            </MDBCardText>
                            <MDBBtn color='primary' href='https://jdboisvert.github.io/'>More About Me</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default About;
