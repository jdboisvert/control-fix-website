import React from 'react';
import { useParams } from 'react-router-dom';
import { Scatter } from 'react-chartjs-2';
import { ControllerData } from '../data/ControllerData';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';
import 'chart.js/auto'; // Required so that chart.js can be used with react-chartjs-2 and it doesn't throw an error.

const ControllerDetails = () => {
    let { id } = useParams();

    const getControllerDetails = (controllerId) => {
        return ControllerData[controllerId];
    };

    const details = getControllerDetails(id);

    const joystickPositionsBefore = details.joystickPositionsBefore;
    const joystickPositionsAfter = details.joystickPositionsAfter;

    // Ensure they connect 
    const joystickDataBeforeClosedLoop = [...joystickPositionsBefore, joystickPositionsBefore[0]];
    const joystickDataAfterClosedLoop = [...joystickPositionsAfter, joystickPositionsAfter[0]];

    // Scatter plot data
    const scatterData = {
        datasets: [
            {
                label: 'Before',
                data: joystickDataBeforeClosedLoop,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                showLine: true,
                fill: true, // Fill the area under the line
            },
            {
                label: 'After',
                data: joystickDataAfterClosedLoop,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                showLine: true,
                fill: true, // Fill the area under the line
            },
        ],
    };

    const scatterOptions = {
        aspectRatio: 1, // Equal width and height for the canvas (only effective if maintainAspectRatio is true)
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                min: -100, // Adjust the minimum value if necessary
                max: 100,  // Adjust the maximum value if necessary
                ticks: {
                    stepSize: 20 // Adjust the step size as necessary
                }
            },
            y: {
                min: -100, // Adjust the minimum value if necessary
                max: 100,  // Adjust the maximum value if necessary
                ticks: {
                    stepSize: 20 // Adjust the step size as necessary
                }
            }
        },
        plugins: {
            legend: {
                position: 'top',
            },
        },
    };

    return (
        <MDBContainer className="my-5">
            <MDBRow className="mt-4">
                <MDBCol md="6">
                    <MDBCard>
                        <MDBCardBody>
                            <MDBCardTitle>Joystick Responsiveness</MDBCardTitle>
                            <Scatter data={scatterData} options={scatterOptions} />
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="6">
                    <MDBCard>
                        <MDBCardBody>
                            <MDBCardTitle>{details.title}</MDBCardTitle>
                            <MDBCardText>
                                <MDBCardText>{details.description}</MDBCardText>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                    <MDBCard style={{ marginTop: '20px' }}>
                        <MDBCardBody>
                            <MDBCardImage src={details.imgUrl} position='top' alt={details.title} />
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default ControllerDetails;
