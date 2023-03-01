import React, { FC, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import './navbar.scss';
interface props {
  setSearchGlobalQuery:React.Dispatch<React.SetStateAction<string>>

}
function NavBar ({ setSearchGlobalQuery }:props) {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');

  const searchQuery:React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    setSearchGlobalQuery(searchText);
    setSearchText('');
    navigate('search');
  };
  return (
    <>
      <nav className="main-nav">
        <div className="container">
          <div className="logo">
            <Link to="/">BugTracker</Link>
          </div>

          <div className="collapse" id="basic-navbar-nav">
            <div className="me-auto">
              <Link to="/">Dashboard</Link>

              <Link to="/report">Report</Link>
            </div>
          </div>

          <div className="nav-search">
            <form onSubmit={searchQuery}>
              <button className="btn search-title-btn" >
                <span role="img" aria-label="search btn">
                  &#128269;
                </span>
              </button>
              <input
                type="search"
                name="search-title"
                value={searchText}
                placeholder="Title, Description or Assignee"
                onChange={event => setSearchText(event.target.value)}
              />
            </form>
          </div>
          <div id="nav-toggle" className="basic-navbar-nav"></div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
