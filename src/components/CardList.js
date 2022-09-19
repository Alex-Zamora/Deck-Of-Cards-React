import styled from 'styled-components';
import { Card } from './Card';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  margin-top: 20px;
  background-color: green;
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

const CardList = ({ drawn }) => {
  return (
    <Container>
      {drawn.map((item, index) => (
        <Card key={index} image={item.image} code={item.code} />
      ))}
    </Container>
  );
};

export default CardList;
