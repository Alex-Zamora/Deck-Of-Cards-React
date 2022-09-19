import styled from 'styled-components';
import { Card } from './Card';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  text-align: center;
  color: white;
  h3 {
    border: 1px solid;
    border-radius: 4px;
    padding: 8px;
  }
  @media (max-width: 580px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 460px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 360px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const CardListBySuit = ({ cardsBySuit }) => {
  return (
    <Container>
      <div className="clubs">
        <h3>Clubs</h3>
        {cardsBySuit.CLUBS &&
          cardsBySuit.CLUBS.map((card, index) => (
            <Card key={index} image={card.image} code={card.code} />
          ))}
      </div>

      <div className="diamons">
        <h3>Diamons</h3>
        {cardsBySuit.DIAMONDS &&
          cardsBySuit.DIAMONDS.map((card, index) => (
            <Card key={index} image={card.image} code={card.code} />
          ))}
      </div>

      <div className="hearts">
        <h3>Hearts</h3>
        {cardsBySuit.HEARTS &&
          cardsBySuit.HEARTS.map((card, index) => (
            <Card key={index} image={card.image} code={card.code} />
          ))}
      </div>

      <div className="spades">
        <h3>Spades</h3>
        {cardsBySuit.SPADES &&
          cardsBySuit.SPADES.map((card, index) => (
            <Card key={index} image={card.image} code={card.code} />
          ))}
      </div>
    </Container>
  );
};

export default CardListBySuit;
