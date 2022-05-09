import React, { Component } from 'react'
import { Link } from "react-router-dom";


class Nav extends Component {
  render() {
    return <div className="nav">
      <Link to="/" className="nav__element">GO HOME</Link>
      <Link to="/landings" className="nav__element">SEARCH LANDINGS</Link>
      <Link to="/neas" className="nav__element">SEARCH NEAS</Link>
    </div>;
  }
}

export default Nav;