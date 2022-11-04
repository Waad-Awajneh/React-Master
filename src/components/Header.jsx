import React, { Component } from "react";

import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <>
        <div className="App">
          <div className="shadow bg-white">
            <div className="h-16 mx-auto px-5 flex items-center justify-between">
              <NavLink
                to="/"
                className="text-2xl hover:text-cyan-500 transition-colors cursor-pointer"
              >
                Tourism
              </NavLink>
              <nav>
                <ul className="flex items-center gap-5">
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tourism IN Jordan
          </h1>
        </div>
      </>
    );
  }
}

export default Header;
