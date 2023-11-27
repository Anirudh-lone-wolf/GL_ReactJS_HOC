import React from "react";
import { Route, Switch } from "react-router-dom";
import NavigationMenu from "./NavigationMenu";
import Home from "./Home";
import Contact from "./Contact";

import "./app.css";

const App = () => {
  return (
    <>
      <NavigationMenu />

      {/* <Switch>
                <Route path="/contact" component={Contact} />
                <Route path="/" component={Home} />
            </Switch> 
        */}

      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
      
    </>
  );
};

export default App;
