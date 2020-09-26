import React from 'react';
import './App.css';

const App = ({ children }) => {
  return (
    <div>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal"><a href="/" style={{ textDecoration: 'none' }}>Rate My Therapist</a></h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <a className="p-2 text-dark" href="">Why Therapy?</a>
          <a className="p-2 text-dark" href="">Find Your Therapy</a>
          <a className="p-2 text-dark" href="">Find a Therapist</a>
          <a className="p-2 text-dark" href="">Rate a Therapist</a>
        </nav>
        <form className="d-flex mr-2">
          <input className="form-control" type="search" placeholder="🔍 Search" aria-label="🔍 Search" />
        </form>
        <a className="btn btn-outline-primary mr-2" href="">Login</a>
        <a className="btn btn-outline-primary" href="">Sign up</a>
      </div>

      <div className="container">
        {children}
      </div>

      {/* <footer className="pt-4 my-md-5 pt-md-5 border-top">
          <div className="row">
            <div className="col-12 col-md">
              <img className="mb-2" src="/docs/5.0/assets/brand/bootstrap-solid.svg" alt="" width="24" height="24" />
              <small className="d-block mb-3 text-muted">© 2020</small>
            </div>
            <div className="col-6 col-md"></div>
            <div className="col-6 col-md"></div>
            <div className="col-6 col-md">
              <h5>About</h5>
              <ul className="list-unstyled text-small">
                <li><a className="link-secondary" href="#">Team</a></li>
                <li><a className="link-secondary" href="#">Privacy</a></li>
                <li><a className="link-secondary" href="#">Terms</a></li>
              </ul>
            </div>
          </div>
        </footer> */}
    </div>
  );
}

export default App;
