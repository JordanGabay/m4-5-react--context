import React from 'react';
import usePersistedState from '../hooks/usePersistedState.hook';
import { items } from './Data'
export const GameContext = React.createContext(null);


export const GameProvider = ({ children }) => {
    const [numCookies, setNumCookies] = usePersistedState("num-cookies", 1000);
    const [purchasedItems, setPurchasedItems] = usePersistedState("items", {
      cursor: 0,
      grandma: 0,
      farm: 0,
    });
  
    const incrementCookies = () => {
      setNumCookies((c) => c + 1);
    };
  
    const calculateCookiesPerSecond = (purchasedItems) => {
      return Object.keys(purchasedItems).reduce((acc, itemId) => {
        const numOwned = purchasedItems[itemId];
        const item = items.find((item) => item.id === itemId);
        const value = item.value;
  
        return acc + value * numOwned;
      }, 0);
    };

    const cookiesPerSecond = calculateCookiesPerSecond(purchasedItems);

    return (
      <GameContext.Provider
        value={{
          numCookies,
          setNumCookies,
          purchasedItems,
          setPurchasedItems,
          incrementCookies,
          cookiesPerSecond,
        }}
      >
        {children}
      </GameContext.Provider>
    );
  };