import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import CardList from './components/CardList';
import CardListBySuit from './components/CardListBySuit';
import Aside from './components/Aside';
import Loader from './components/Loader';

function App() {
  // fetch initial data
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // cards array
  const [drawn, setDrawn] = useState([]);
  const [cardsBySuit, setCardsBySuit] = useState([]);
  const [queens, setQueens] = useState([]);
  // flag to know which list shown
  const [showCardsBySuit, setShowCardsBySuit] = useState(false);
  // flag to disable button
  const [disabled, setDisabled] = useState(false);

  const getCards = async () => {
    try {
      setLoading(true);
      const res1 = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
      const res2 = await axios.get(
        `https://deckofcardsapi.com/api/deck/${res1.data.deck_id}/draw/?count=52`
      );

      setCards(
        res2.data.cards.map((card) => {
          return {
            code: card.code,
            image: card.image,
            suit: card.suit,
            value: card.value,
          };
        })
      );
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCards();
  }, []);

  useEffect(() => {
    if (queens.length === 4) {
      setDisabled(true);

      const sortAndGroupBySuit = drawn
        .sort((a, b) => a.value.localeCompare(b.value, undefined, { numeric: true }))
        .reduce((group, card) => {
          const { suit } = card;
          group[suit] = group[suit] ?? [];
          group[suit].push(card);
          return group;
        }, {});

      setCardsBySuit(sortAndGroupBySuit);
      setShowCardsBySuit(true);
    }
  }, [queens, drawn]);

  const drawNewCard = () => {
    setDisabled(true);
    setTimeout(() => {
      const newCards = cards.slice(0, -1);
      const newCard = cards[cards.length - 1];
      const newDrawn = [...drawn, cards[cards.length - 1]];

      if (newCard.value === 'QUEEN') {
        setQueens([...queens, newCard]);
      }

      if (cards.length > 0) {
        setCards(newCards);
        setDrawn(newDrawn);
      }
      setDisabled(false);
    }, 1000);
  };

  if (error) return <>An error ocurred while get cards</>;

  if (loading) return <Loader />;

  return (
    <div className="App">
      <Aside cards={cards} drawn={drawn} drawNewCard={drawNewCard} disabled={disabled} />
      <main>
        {showCardsBySuit === false ? (
          <CardList drawn={drawn} />
        ) : (
          <CardListBySuit cardsBySuit={cardsBySuit} />
        )}
      </main>
    </div>
  );
}

export default App;
