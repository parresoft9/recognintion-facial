import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <header>
        <div className="Navbar">
          <Link to="/">Home</Link>
          <Link to="/photo">Reconocimiento</Link>
          <Link to="/camera">Detección</Link>
          
        </div>
      </header>
    );
  }
}

export default Header;
