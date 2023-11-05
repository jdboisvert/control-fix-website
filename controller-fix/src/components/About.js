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
                                Controller Enthusiast
                            </MDBCardTitle>
                            <MDBCardText className='text-start'>
                                With a passion for both software development and gaming, I've found a unique niche in repairing and optimizing controllers. My background in software engineering allows me to approach problems analytically, ensuring that every controller I fix not only works but works better than it did before. This project is a personal endeavor to document the process and share the results with a community of gamers and tech enthusiasts.
                            </MDBCardText>
                            <MDBCardText className='text-start'>
                                Beyond just repairing controllers, I explore ways to enhance their functionality, experimenting with different modifications that can improve gaming performance. Whether it's for competitive gaming or casual play, I believe a well-functioning controller is key to an immersive experience.
                            </MDBCardText>
                            <MDBCardText className='text-start'>
                                I hope you find these insights and results both informative and inspiring!
                            </MDBCardText>
                            <MDBBtn color='primary' href='/contact'>Contact Me</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default About;
