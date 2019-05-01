import React, { Component } from 'react';
import './App.css';
// import firebase from 'firebase'

// subcomponents
import MenuList from './components/MenuList.js';
import Navbar from './components/Navbar.js';
import Pedidos from './components/Pedidos';


// const config = {
//   apiKey: "AIzaSyA2junqwJNf7EV4x_g8cVySpctsyppiit8",
//   authDomain: "mi-fabuloso-burger.firebaseapp.com",
//   databaseURL: "https://mi-fabuloso-burger.firebaseio.com",
//   projectId: "mi-fabuloso-burger",
//   storageBucket: "mi-fabuloso-burger.appspot.com",
//   messagingSenderId: "1022205186885"
// };
// firebase.initializeApp(config);

// const db = firebase.firestore();
// const settings = {/* your settings... */ timestampsInSnapshots: true };
// db.settings(settings);


class App extends Component {
  constructor() {
    super();
    this.state = {
      pedidos:[],
    }
  }

  // handleClick = () => {
  //   const { user, items, totalPrice } = this.state.newOrder;
  //   db.collection("orders").add({
  //     user, items, totalPrice
  //   })
  //     .then(docRef => {
  //       this.setState({
  //         newOrder: {
  //           user: '',
  //           totalPrice: 0,
  //           items: []
  //         }
  //       })
  //       console.log("Document written with ID: ", docRef.id);
  //     })
  //     .catch((error) => {
  //       console.error("Error adding document: ", error);
  //     });
  // }

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
              <Pedidos coleccionPedidos={this.state.pedidos} eliminar= {this.removeTodo}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;



