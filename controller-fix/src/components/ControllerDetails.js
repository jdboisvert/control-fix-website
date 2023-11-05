import React from 'react';
import { useParams } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';

const ControllerDetails = () => {
    let { id } = useParams();

    const getControllerDetails = (controllerId) => {
        return {
            id: controllerId,
            name: 'Xtreme Gaming Controller',
            description: 'Fully customized gaming controller with enhanced grip and responsive triggers.',
            beforeStats: {
                responsiveness: 'Low',
                grip: 'Poor',
                triggers: 'Sticky',
            },
            afterStats: {
                responsiveness: 'High',
                grip: 'Excellent',
                triggers: 'Smooth',
            },
            images: {
                before: 'https://mdbootstrap.com/img/new/standard/nature/184.webp',
                after: 'https://mdbootstrap.com/img/new/standard/nature/185.webp',
            },
        };
    };

    const details = getControllerDetails(id);

    return (
        <MDBContainer className="my-5">
            <MDBRow>
                <MDBCol>
                    <MDBCard>
                        <MDBCardBody>
                            <MDBCardTitle>Controller Details: {details.name}</MDBCardTitle>
                            <MDBCardText>{details.description}</MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>

            <MDBRow className="mt-4">
                <MDBCol md="6">
                    <MDBCard>
                        <MDBCardImage src={details.images.before} alt="Before" position="top" />
                        <MDBCardBody>
                            <MDBCardTitle>Before</MDBCardTitle>
                            <MDBCardText>
                                <ul>
                                    <li>Responsiveness: {details.beforeStats.responsiveness}</li>
                                    <li>Grip: {details.beforeStats.grip}</li>
                                    <li>Triggers: {details.beforeStats.triggers}</li>
                                </ul>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol md="6">
                    <MDBCard>
                        <MDBCardImage src={details.images.after} alt="After" position="top" />
                        <MDBCardBody>
                            <MDBCardTitle>After</MDBCardTitle>
                            <MDBCardText>
                                <ul>
                                    <li>Responsiveness: {details.afterStats.responsiveness}</li>
                                    <li>Grip: {details.afterStats.grip}</li>
                                    <li>Triggers: {details.afterStats.triggers}</li>
                                </ul>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default ControllerDetails;
