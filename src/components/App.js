import React, { useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createContext } from 'react';
import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import Game from "./Game";
import { GameContext } from './GameContext'
import useInterval from '../hooks/use-interval.hook'


export const AppContext = createContext();

const App = () => {
  const { numCookies, setNumCookies, cookiesPerSecond } = React.useContext(
    GameContext
  );

  useInterval(() => {
    setNumCookies(numCookies + cookiesPerSecond);
  }, 1000);

 return (
    <>
      <GlobalStyles />
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/game">
          <Game/>
        </Route>
      </Router>
      </>
  );
};

export default App;
