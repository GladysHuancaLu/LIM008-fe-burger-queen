import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Navbar extends Component {
  
    render() {
      return (
        <nav className="navbar navbar-dark navegacion">
          <a className="navbar-brand" href="/">
            Burguer Queen :P server del
            <span className="badge badge-pill badge-light ml-2">
              {/* {this.state.pedidos.length} */}
            </span>
          </a>
          <img src={logo} className="App-logo" alt="logo" />

        </nav>
      )
    }
  
  }
  
  export default Navbar;