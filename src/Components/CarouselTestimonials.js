import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Card from './Card';

const CardStack = ({ cards }) => {
  return (
    <Carousel showStatus={false}>
      {cards.map((card) => (
        <Card key={card.id} title={card.title} />
      ))}
    </Carousel>
  );
};

export default CardStack;
