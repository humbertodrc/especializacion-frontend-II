import { createContext, useState, FC } from 'react';

interface ThemeContextProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}


export const ThemeContext = createContext({} as ThemeContextProps)

const ThemeProvider: FC<ThemeProviderProps>  = ({ children }) => {

  const [theme, setTheme] = useState<'light' | 'dark'>('light') 
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{
      theme,
      toggleTheme
    }}>
      {children}
    </ThemeContext.Provider>
    )

}

export default ThemeProvider;
