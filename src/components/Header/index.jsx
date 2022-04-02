import React, { useState, useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import styles from './Header.module.css';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const color = useContext(ThemeContext);
  const darkClass = darkMode ? styles['Header--dark'] : '';

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${styles.Header} ${darkClass}`} >
      <h1 style={{ color }}>ReactHooks</h1>
      <button type="button" onClick={toggleDarkMode}>{darkMode ? 'Dark mode' : 'Light mode'}</button>
    </div>
  );
};

export default Header;