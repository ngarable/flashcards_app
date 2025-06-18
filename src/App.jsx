import React, { useState } from 'react';
import flashcards from './data/flashcards';
import Flashcard from './components/Flashcard';
import './App.css';

function App() {
  const [index, setIndex] = useState(0);

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % flashcards.length);
  };

  const prevCard = () => {
    setIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
  };

  return (
    <div className="app">
      <h1>Financial Literacy Flashcards</h1>
      <p>Learn the basics of personal finance one card at a time.</p>
      <p>Total Cards: {flashcards.length}</p>

      <Flashcard flashcard={flashcards[index]} />

      <div className="buttons">
        <button onClick={prevCard}>Previous</button>
        <button onClick={nextCard}>Next</button>
      </div>
    </div>
  );
}

export default App;
