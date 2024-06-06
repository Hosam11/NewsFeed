import {PropsWithChildren, createContext, useEffect, useState} from 'react';
import {getTheme, saveTheme} from '../component/Storage/Storage';

export const themes = {
  light: 'light',
  dark: 'dark',
};

export const ThemeContext = createContext<{
  theme: string;
  toggleTheme: () => void;
  isDarkTheme: () => boolean;
}>({
  theme: themes.light,
  toggleTheme: () => {},
  isDarkTheme: () => false,
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
    console.log('newTheme: ' + newTheme);
    setTheme(newTheme);
    saveTheme(newTheme);
  };

  const isDarkTheme = () => theme === themes.dark;
  return (
    <ThemeContext.Provider value={{theme, toggleTheme, isDarkTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default MyThemeProvider;
