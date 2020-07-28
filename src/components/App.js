import React, { useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createContext } from 'react';
import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import Game from "./Game";
import { GameContext } from './GameContext'

export const AppContext = createContext();

const App = () => {
  const {
    numCookies,
    setNumCookies,
    purchasedItems,
    setPurchasedItems,
    calculateCookiesPerSecond,
  } = useContext(GameContext)
  
  const incrementCookies = () => {
    setNumCookies((c) => c + 1);
  };

  return (
    <AppContext.Provider
      value={{
        numCookies,
        setNumCookies,
        purchasedItems,
        setPurchasedItems,
        incrementCookies,
        calculateCookiesPerSecond,
      }}
    >
      <GlobalStyles />
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/game">
          <Game/>
        </Route>
      </Router>
      </AppContext.Provider>
  );
};

export default App;
