import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
        <div className="navbar bg-neutral-focus">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 bg-base-100" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><p>Homepage</p></li>
              <li><p>Portfolio</p></li>
              <li><p>About</p></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center text-white">
          <p className="btn btn-ghost normal-case text-xl">Best Stereaming Movie</p>
        </div>
        <div className="navbar-end">
          
        </div>
      </div>
    )
  }
}
