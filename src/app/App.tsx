import React from "react";
import "../css/app.css";
import { Switch } from "react-router-dom";

import { Link, Route } from "react-router-dom";
import { About } from "./screens/HomePage/Index";
import { Users } from "./screens/Users";
import { Home } from "./screens/Home";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
