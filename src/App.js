import React from 'react';
import Header from './components/Header/Header';
import Cursor from './components/Cursor/Cursor';
import Products from './components/Products/Products';
import Shop from './components/Shop/Shop';
import Realizations from './components/Realizations/Realizations';
import Offer from './components/Offer/Offer';
import Footer from './components/Footer/Footer';
import { ThemeProvider } from 'styled-components';
import theme from './assets/theme';
import { AppContainer, GlobalStyle, AppWrapper } from './assets/globalStyles';

const App = () => {
  return (
    <ThemeProvider theme = { theme }>
      <AppContainer>
        <Cursor />
        <AppWrapper>
          <Header />
          <Products />
          <Shop />
          <Realizations />
          <Offer />
          <Footer />
        </AppWrapper>
      </AppContainer>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
