import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

// screens
import Home from "./screens/Home";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import ManageLinks from "./screens/Manage/Link";
// CRUD
import ManageLinksCreate from "./screens/Manage/Link/Create";
import ManageLinksEdit from "./screens/Manage/Link/Edit";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul className='list-group list-group-horizontal'>
            <li className='list-group-item'>
              <Link to='/sign-in'>Sign in</Link>
            </li>

            <li className='list-group-item'>
              <Link to='/sign-up'>Sign up</Link>
            </li>

            <li className='list-group-item'>
              <Link to='/manage/links/create'>Create links</Link>
            </li>

            <li className='list-group-item'>
              <Link to='/manage/links/edit'>Edit links</Link>
            </li>

            <li className='list-group-item'>
              <Link to='/manage/links'>Links</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/sign-in'>
            <SignIn />
          </Route>
          <Route path='/sign-up'>
            <SignUp />
          </Route>
          <Route path='/manage/links/create'>
            <ManageLinksCreate />
          </Route>
          <Route path='/manage/links/edit'>
            <ManageLinksEdit />
          </Route>
          <Route path='/manage/links'>
            <ManageLinks />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
