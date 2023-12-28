import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import ControllerCard from './ControllerCard';
import { ControllerData } from '../data/ControllerData';

const ControllerGrid = () => {
  const cards = Object.entries(ControllerData).map(([id, data]) => ({
    id,
    ...data
  }));

  return (
    <MDBRow>
      {cards.map((card, index) => (
        <MDBCol md="4" key={index}>
          <ControllerCard
            id={card.id}
            imgUrl={card.imgUrl}
            title={card.title}
            description={card.description}
          />
        </MDBCol>
      ))}
    </MDBRow>
  );
}

export default ControllerGrid;
