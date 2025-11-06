import { createContext, useContext } from 'react';
import { useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const systemColorScheme = useColorScheme();
  const theme = systemColorScheme === 'dark' ? 'dark' : 'light';
  const colors = Colors[theme];

  return (
    <ThemeContext.Provider value={{ theme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
