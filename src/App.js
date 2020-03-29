// @flow
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import { DefaultTheme } from './styles/themes/styles.d';

import usePersistedState from './utils/usePersistedState';
import Header from './components/Header';

const App = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme: function = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
};
export default App;
