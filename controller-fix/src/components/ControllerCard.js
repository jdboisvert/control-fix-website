import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

// TODO add link to learn more and introduce i18n. 
const ControllerCard = ({ imgUrl, title, description }) => {
  return (
    <MDBCard>
      <MDBCardImage src={imgUrl} position='top' alt={title} />
      <MDBCardBody>
        <MDBCardTitle>{title}</MDBCardTitle>
        <MDBCardText>
          {description}
        </MDBCardText>
        <MDBBtn href='#'>Learn More</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}

export default ControllerCard;
