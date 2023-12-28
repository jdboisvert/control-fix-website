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
                                This is a small side project I did for fun to see what it was like to fix Nintendo 64 Controllers. My background is in software engineering so I figured "Why not build a website to record my findings?". I got annoyed of people posting controllers for sell without really recording the results of their tests (mainly in the joystick which is make or break for most controllers). 
                                The results of my tests were found on a real Nintendo 64 using <a href="https://github.com/sanni/controllertest">a ROM</a> on an <a href="https://krikzz.com/our-products/cartridges/ed64x7.html">EverDrive X7</a>. 
                            </MDBCardText>
                            <MDBCardText className='text-start'>
                                I loved the Nintendo 64 growing up and when I first tried to fix my controller it totally changed my experience revisiting my childhood and I really want to share that with others too.
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
