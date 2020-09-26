import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Types from './type/Types';
import Therapist from './therapist/Therapist';
import Home from './Home';

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal">
          <Link className="p-2 text-dark" to="/">Rate My Therapist</Link>
        </h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <Link className="p-2 text-dark" to="/types">Find Your Therapy</Link>
          <Link className="p-2 text-dark" to="/therapists">Find a Therapist</Link>
          <Link className="p-2 text-dark" to="/therapists">Rate a Therapist</Link>
        </nav>
        <form className="d-flex mr-2">
          <input className="form-control" type="search" placeholder="🔍 Search" aria-label="🔍 Search" />
        </form>
      </div>

      <div className="container">
        <Switch>
          <Route path="/therapists">
            <Therapist />
          </Route>
          <Route path="/types">
            <Types />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
