import React, {useContext} from 'react';
import {Switch} from 'react-native';
import ThemeContext from '../../context/ThemeContext';


const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  return (
      <Switch
        value={themeMode !== 'light'}
        onValueChange={() =>
        setThemeMode(themeMode === 'light' ? 'dark' : 'light')
        }
      />
  );
};

export default ThemeToggler;
