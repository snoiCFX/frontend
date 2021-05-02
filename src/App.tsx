import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Menu from "./components/Menu/Menu";

import Home from "./views/Home";
import Search from "./views/Search";
import UploadDetails from "./views/UploadDetails";
import NotFound from "./views/NotFound";

function App() {
  useEffect(() => {
    if (typeof (window as WindowChain).conflux !== "undefined")
      return console.log((window as WindowChain).conflux);
    return console.log(false);
  }, []);

  return (
    <Router>
      <Menu>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/upload">
            <UploadDetails />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Menu>
    </Router>
  );
}

export default App;
