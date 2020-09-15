import React from "react";
import { HashRouter, Route, Redirect } from "react-router-dom";

import Todo from "../todo/todo";
import About from "../about/About";

export default (props) => (
  <HashRouter>
    <Route path="/todos" component={Todo} />
    <Route path="/about" component={About} />
    <Redirect from="*" to="/todos" />
  </HashRouter>
);
