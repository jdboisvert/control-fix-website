import React from 'react';
import { Link } from 'react-router-dom';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

const ControllerCard = ({ id, imgUrl, title, description }) => {
  return (
    <MDBCard>
      <MDBCardImage src={imgUrl} position='top' alt={title} />
      <MDBCardBody>
        <MDBCardTitle>{title}</MDBCardTitle>
        <MDBCardText>
          {description}
        </MDBCardText>
        <Link to={`/controller/${id}`}>
          <MDBBtn>More Details</MDBBtn>
        </Link>
      </MDBCardBody>
      
    </MDBCard>
  );
}

export default ControllerCard;
