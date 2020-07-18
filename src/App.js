import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/sign-in'>Sign in</Link>
            </li>

            <li>
              <Link to='/sign-up'>Sign up</Link>
            </li>

            <li>
              <Link to='/manage/links/create'>Create links</Link>
            </li>

            <li>
              <Link to='/manage/links/edit'>Edit links</Link>
            </li>

            <li>
              <Link to='/manage/links'>Links</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/sign-in'>Sign in</Route>
          <Route path='/sign-up'>Sign up</Route>
          <Route path='/manage/links/create'>Create links</Route>
          <Route path='/manage/links/edit'>Edit links</Route>
          <Route path='/manage/links'>Links</Route>
          <Route path='/'>
            <h1 className="text-muted">home</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
