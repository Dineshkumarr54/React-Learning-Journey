import React,{useContext} from 'react';
import ThemeContext from './ThemeContext';
import { color } from 'framer-motion';

const ThemedComponent = () => {
    const {theme,toggleTheme} = useContext(ThemeContext);

    const styles = {
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding:'2rem',
        textAlign:'center',
    };
  return (
    <div style={styles}>
        <h2>{theme === 'light' ? 'Light Theme' : 'Dark Theme'}</h2>
        <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ThemedComponent