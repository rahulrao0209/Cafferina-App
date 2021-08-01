import React from "react";
import { Layout } from "../src/pages/Layout";
import { Home } from "../src/pages/Home";
import { Order } from "../src/pages/Order";
import { About } from "../src/pages/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
