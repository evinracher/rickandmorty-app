import React, { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const darkClass = darkMode ? styles['Header--dark'] : '';

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${styles.Header} ${darkClass}`} >
      <h1>ReactHooks</h1>
      <button type="button" onClick={toggleDarkMode}>{darkMode ? 'Dark mode' : 'Light mode'}</button>
    </div>
  );
};

export default Header;