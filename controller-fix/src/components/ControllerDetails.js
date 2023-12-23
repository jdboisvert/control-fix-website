import React from 'react';
import { useParams } from 'react-router-dom';
import { Scatter } from 'react-chartjs-2';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import 'chart.js/auto'; // Required so that chart.js can be used with react-chartjs-2 and it doesn't throw an error.

const ControllerDetails = () => {
    let { id } = useParams();

    const getControllerDetails = (controllerId) => {
        return {
            id: controllerId,
            name: 'Yellow Controller',
            description: 'A very dirty controller that needed a good cleaning.',
            images: {
                before: 'https://mdbootstrap.com/img/new/standard/nature/184.webp',
                after: 'https://mdbootstrap.com/img/new/standard/nature/185.webp',
            },
        };
    };

    const details = getControllerDetails(id);

    // Mock joystick responsiveness values
    const joystickPositionsBefore = [
        { x: 3, y: 78 },
        { x: 63, y: 68 },
        { x: 82, y: -1 },
        { x: 70, y: -68 },
        { x: 2, y: -80 },
        { x: -63, y: -72 },
        { x: -75, y: -8 },
        { x: -64, y: 65 }
        // TODO missing center position
    ];

    const joystickPositionsAfter = [
        { x: 1, y: 82 },
        { x: 62, y: 71 },
        { x: 78, y: 1 },
        { x: 62, y: -68 },
        { x: 0, y: -81 },
        { x: -60, y: -70 },
        { x: -75, y: 0 },
        { x: -58, y: 69 },
    ];

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
            // TODO add OEM data
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

    const calculateImprovement = (before, after) => {
        return ((after - before) / before * 100).toFixed(1); // Returns the percentage improvement
    };

    // Example stats for comparison (TODO - replace with actual stats of improvement in all directions)
    const comparisonStats = {
        responsiveness: {
            before: 50,
            after: 90
        },
        grip: {
            before: 40,
            after: 85
        },
        triggers: {
            before: 45,
            after: 95
        }
    };

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
                        <MDBCardBody>
                            <MDBCardTitle>Joystick Responsiveness</MDBCardTitle>
                            <Scatter data={scatterData} options={scatterOptions} />
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="6">
                    <MDBCard>
                        <MDBCardBody>
                            <MDBCardTitle>Improvement Stats</MDBCardTitle>
                            <MDBCardText>
                                <p>Responsiveness improved by {calculateImprovement(comparisonStats.responsiveness.before, comparisonStats.responsiveness.after)}%</p>
                                <p>Grip improved by {calculateImprovement(comparisonStats.grip.before, comparisonStats.grip.after)}%</p>
                                <p>Triggers improved by {calculateImprovement(comparisonStats.triggers.before, comparisonStats.triggers.after)}%</p>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default ControllerDetails;
