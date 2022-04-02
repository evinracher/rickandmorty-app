import React, { useState } from 'react';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="Header">
      <h1>ReactHooks</h1>
      <button type="button" onClick={toggleDarkMode}>{darkMode ? 'Dark mode' : 'Light mode'}</button>
    </div>
  );
};

export default Header;