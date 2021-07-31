import React from "react";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Order } from "./components/Order";
import { About } from "./components/About";
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
