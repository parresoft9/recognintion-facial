import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const capgeminiLogo = require('../img/capgemini-1.jpg');

class Header extends Component {
  render() {
    return (
      <header>
        <div className="Navbar">
          <Link to="/">Home</Link>
          <Link to="/photo">Reconocimiento</Link>
          <Link to="/camera">Detección</Link>
          <img src={capgeminiLogo} alt="example" style={{ width: 100, float: "right" }} />
        </div>
      </header>
    );
  }
}

export default Header;
