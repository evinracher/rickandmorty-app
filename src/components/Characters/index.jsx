import React, { useState, useEffect } from 'react';
import styles from './Characters.module.css';

const API = 'https://rickandmortyapi.com/api/character';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const cardClass = `${styles.Characters__card}`;

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className={styles.Characters}>
      {characters.map(character => (
        <div className={cardClass} key={character.id}>
          <h2>{character.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Characters;