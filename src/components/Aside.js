import styled from 'styled-components';

const Sidebar = styled.aside`
  height: 120px;
  background-color: black;
  border-radius: 4px;
  padding: 10px;
  margin-top: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  span {
    font-size: 18px;
    color: white;
    margin-bottom: 8px;
  }
  button {
    margin-top: 10px;
    background: yellow;
    border: none;
    color: black;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    &:disabled {
      background-color: grey;
      cursor: not-allowed;
      color: white;
    }
  }
  @media (max-width: 830px) {
    width: 300px;
    margin: 20px;
  }
  @media (max-width: 360px) {
    width: 85%;
  }
`;

const Aside = ({ cards, drawn, drawNewCard, disabled }) => {
  return (
    <Sidebar>
      <span>
        Deck: <strong>{cards.length}</strong>
      </span>
      <span>
        Drawn cards: <strong>{drawn.length}</strong>
      </span>
      <button onClick={drawNewCard} disabled={disabled}>
        Add Card
      </button>
    </Sidebar>
  );
};

export default Aside;
