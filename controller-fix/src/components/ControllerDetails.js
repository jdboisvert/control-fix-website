import React from 'react';
import { useParams } from 'react-router-dom';
import { Radar } from 'react-chartjs-2';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import Chart from 'chart.js/auto'; // Required so that chart.js can be used with react-chartjs-2 and it doesn't throw an error.

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

    // Mock joystick responsiveness values
    const joystickDataBefore = {
        UP: 90, // Replace with actual values
        UPRIGHT: 80,
        RIGHT: 85,
        DOWNRIGHT: 70,
        DOWN: 60,
        DOWNLEFT: 65,
        LEFT: 75,
        UPLEFT: 85,
    };

    const joystickDataAfter = {
        UP: 95,
        UPRIGHT: 90,
        RIGHT: 90,
        DOWNRIGHT: 88,
        DOWN: 85,
        DOWNLEFT: 84,
        LEFT: 88,
        UPLEFT: 92,
    };

    // Mock joystick responsiveness values
    const originalJoystickData = {
            UP: 80,
            UPRIGHT: 80,
            RIGHT: 80,
            DOWNRIGHT: 80,
            DOWN: 80,
            DOWNLEFT: 80,
            LEFT: 80,
            UPLEFT: 80,
        };

    // Radar chart data
    const chartData = {
        labels: Object.keys(joystickDataBefore),
        datasets: [
            {
                label: 'Factory Original',
                data: Object.values(originalJoystickData),
                fill: true,
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // Light green with transparency
                borderColor: 'rgb(75, 192, 192)', // Solid light green
                pointBackgroundColor: 'rgb(75, 192, 192)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(75, 192, 192)'
            },            
            {
                label: 'Before',
                data: Object.values(joystickDataBefore),
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)'
            },
            {
                label: 'After',
                data: Object.values(joystickDataAfter),
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                pointBackgroundColor: 'rgb(54, 162, 235)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(54, 162, 235)'
            },
        ],
    };

    const chartOptions = {
        elements: {
            line: {
                borderWidth: 3
            }
        },
        scales: {
            r: {
                angleLines: {
                    display: true
                },
                suggestedMin: 50,
                suggestedMax: 100
            }
        },
    };

    const calculateImprovement = (before, after) => {
        return ((after - before) / before * 100).toFixed(1); // Returns the percentage improvement
    };

    // Example stats for comparison
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
                            <Radar data={chartData} options={chartOptions} />
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
