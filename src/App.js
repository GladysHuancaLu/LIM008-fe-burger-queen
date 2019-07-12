import React, { Component } from 'react';
import './App.css';
import firebase from './firebase';

// subcomponents
import MenuList from './components/MenuList.js';
import Navbar from './components/Navbar.js';
import Pedidos from './components/Pedidos';


class App extends Component {
  constructor() {
    super();
    this.state = {
      pedidos:[],
      nameClient:''
    }
  }


  add = (orderList) => {
    const elementMatch = this.state.pedidos.find(item => item.id === orderList.id);
     return elementMatch 
     ? (orderList.quantity += 1, this.setState({pedidos: [...this.state.pedidos]}))
      : this.setState({pedidos: [...this.state.pedidos]}) 
  }

  subtract = (orderList) => {
    const elementMatch = this.state.pedidos.find(item => item.id === orderList.id);
     return elementMatch 
     ? (orderList.quantity -= 1, this.setState({pedidos: [...this.state.pedidos]}))
      : this.setState({pedidos: [...this.state.pedidos]}) 
  }

  handleAddTodo = (todo) => {
    this.setState({
      pedidos: [...this.state.pedidos, todo],
    })
  }

  removeTodo = (id) => {
    this.setState({
      pedidos: this.state.pedidos.filter((elemento) => {
        return elemento.id !== id
      })
    });
  }
  updateNameClient = (e) => {
    this.setState({nameClient:(e.target.value)});
  }

  addOrderToFirebase = (pedido) => {
    
    console.log(pedido)
    const db = firebase.firestore();
    db.collection('orden').add({ 
      pedido
    })
    console.log(db.collection('orden'))

    this.setState({pedidos: []})
  };

  render() {
    // RETURN THE COMPONENT
    return (
      <div className="App">
        <div>
          <Navbar/>
        </div>
        <div className="container">
          <div className="row mt-8">

            <div className="col-md-8 text-center">
              <MenuList onAddTodo={this.handleAddTodo}></MenuList>
            </div>

            <div className="col-md-4" >
              <Pedidos updateNameClient={this.updateNameClient} coleccionPedidos={this.state.pedidos} add={this.add} subtract={this.subtract} eliminar= {this.removeTodo} addOrderToFirebase= {this.addOrderToFirebase} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;



