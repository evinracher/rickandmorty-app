import { useState, useEffect } from 'react';

const useCharacters = (API) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.error(error));
  }, [API]);

  return characters;
};

export default useCharacters;