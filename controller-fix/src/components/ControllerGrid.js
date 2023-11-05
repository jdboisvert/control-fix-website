import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import ControllerCard from './ControllerCard'; 

const ControllerGrid = () => {
  // TODO load from CSV or future API.
  const cards = [
    {
      imgUrl: 'https://mdbootstrap.com/img/new/standard/nature/184.webp',
      title: 'Controller Green',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },    
    {
      imgUrl: 'https://mdbootstrap.com/img/new/standard/nature/184.webp',
      title: 'Card title',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },    
    {
      imgUrl: 'https://mdbootstrap.com/img/new/standard/nature/184.webp',
      title: 'Card title',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },    
    {
      imgUrl: 'https://mdbootstrap.com/img/new/standard/nature/184.webp',
      title: 'Card title',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },    
    {
      imgUrl: 'https://mdbootstrap.com/img/new/standard/nature/184.webp',
      title: 'Card title',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },    
    {
      imgUrl: 'https://mdbootstrap.com/img/new/standard/nature/184.webp',
      title: 'Card title',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },    
    {
      imgUrl: 'https://mdbootstrap.com/img/new/standard/nature/184.webp',
      title: 'Card title',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },    
    {
      imgUrl: 'https://mdbootstrap.com/img/new/standard/nature/184.webp',
      title: 'Card title',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
  ];

  return (
    <MDBRow>
      {cards.map((card, index) => (
        <MDBCol md="4" key={index}>
          <ControllerCard
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
