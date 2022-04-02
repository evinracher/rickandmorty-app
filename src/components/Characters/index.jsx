import React, { useState, useEffect, useReducer, useMemo } from 'react';
import styles from './Characters.module.css';

const initialState = {
  favorites: []
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
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
  const [search, setSearch] = useState('');
  const searchInputRef = useRef(null);

  const cardClass = `${styles.Characters__card}`;

  const handleSearch = () => {
    setSearch(searchInputRef.current.value);
  };

  const handleAddToFavorites = (favorite) => {
    dispatch({ type: 'ADD_TO_FAVORITES', payload: favorite });
  };


  const filteredCharacters = useMemo(() => {
    return characters.filter(character =>
      character.name.toLowerCase().includes(search.toLowerCase()
      ));
  }, [search, characters]);


  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h3>Favorites</h3>
      {state.favorites.map(favorite => (
        <div key={favorite.id}>
          <li>{favorite.name}</li>
        </div>
      ))}
      <div>
        <input
          ref={searchInputRef}
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search a character" />
      </div>
      <div className={styles.Characters}>
        {filteredCharacters.map(character => (
          <div className={cardClass} key={character.id}>
            <h3>{character.name}</h3>
            <button onClick={() => handleAddToFavorites(character)}>Add to favorites</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;