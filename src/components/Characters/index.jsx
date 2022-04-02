import React, { useState, useEffect, useReducer } from 'react';
import styles from './Characters.module.css';

const initialState = {
  favorites: []
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      console.log("Adding...");
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };

    default:
      return state;
  }
};

const API = 'https://rickandmortyapi.com/api/character';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [state, dispatch] = useReducer(favoriteReducer, initialState);

  const cardClass = `${styles.Characters__card}`;

  const handleAddToFavorites = (favorite) => {
    dispatch({ type: 'ADD_TO_FAVORITES', payload: favorite });
  };

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className={styles.Characters}>
      {state.favorites.map(favorite => (
        <div className={cardClass} key={favorite.id}>
          <h2>{favorite.name}</h2>
        </div>
      ))}
      {characters.map(character => (
        <div className={cardClass} key={character.id}>
          <h2>{character.name}</h2>
          <button onClick={() => handleAddToFavorites(character)}>Add to favorites</button>
        </div>
      ))}
    </div>
  );
};

export default Characters;