import {PropsWithChildren, createContext, useEffect, useState} from 'react';
import {getTheme, saveTheme} from '../component/Storage/Storage';

export const themes = {
  light: 'light',
  dark: 'dark',
};

export const ThemeContext = createContext({
  theme: themes.light,
  toggleTheme: () => {},
});

const MyThemeProvider: React.FC<PropsWithChildren> = ({children}) => {
  const [theme, setTheme] = useState(themes.light);

  useEffect(() => {
    async function getStoredTheme() {
      const storedTheme = await getTheme();
      console.log('getStoredTheme: ' + storedTheme);
      if (storedTheme) {
        setTheme(storedTheme);
      }
    }
    getStoredTheme();
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === themes.light ? themes.dark : themes.light;
    setTheme(newTheme);
    saveTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default MyThemeProvider;
