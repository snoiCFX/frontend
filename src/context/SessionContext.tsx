import React, { useState } from "react";

const SessionContext = React.createContext({
  isLogged: false,
  login: (): any | void => null,
  userAddress: undefined,
});

const SessionContextProvider: React.FC = ({ children }) => {
  const [isLogged, setisLogged] = useState(false);
  const [userAddress, setUserAddress] = useState(undefined);

  const login = async () => {
    const confluxProvider = (window as WindowChain).conflux;
    const accounts = await confluxProvider.send("cfx_requestAccounts");
    const mainAccount = accounts[0];
    setisLogged(true);
    setUserAddress(mainAccount);
    console.log(userAddress);
    return !isLogged;
  };

  return (
    <SessionContext.Provider value={{ isLogged, login, userAddress }}>
      {children}
    </SessionContext.Provider>
  );
};

export { SessionContext, SessionContextProvider };
