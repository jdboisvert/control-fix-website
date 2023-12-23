import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import ControllerCard from './ControllerCard';

const ControllerGrid = () => {
  // TODO load from CSV or future API.
  const cards = [
    {
      id: 2,
      imgUrl: 'https://mdbootstrap.com/img/new/standard/nature/184.webp',
      title: 'Yellow Controller',
      description: 'Was quite dirty and needed a good cleaning.',
    },
  ];

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
