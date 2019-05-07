import React, { Component } from 'react';
import './App.css';
// import firebase from 'firebase'

// subcomponents
import MenuList from './components/MenuList.js';
import Navbar from './components/Navbar.js';
import Pedidos from './components/Pedidos';


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      menu: [],
      options: "desayuno",
      pedidos: []
    };
  }



  componentDidMount() {
    fetch('https://raw.githubusercontent.com/luanazevallos/LIM008-fe-burger-queen/develop/src/menu.json')
      .then(res => res.json())
      .then((json) => {
        this.setState({
          menu: json,
        });
      });
  }

  mostrarMenuElegido = (e) => {
    const {value} = e.target;
    this.setState({
      options: value
    });
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

  //  handleClick = (e) => {
  //   e.preventDefault();
  //   const pedidos=this.state.pedidos;
  //   const db = firebase.firestore();
  //   db.collection('pedidos').add( pedidos );
  //   // setClientsName('');
  //   // setOrderItems([]);
  // };

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
    console.log(this.state.pedidos)
    return (
      <div className="App">
        <div>
          <Navbar/>
        </div>
        <div className="container">
          <div className="row mt-8">

            <div className="col-md-8 text-center">
              <MenuList onAddTodo={this.handleAddTodo}  mostrarMenuElegido={this.mostrarMenuElegido} menu={this.state.menu} options={this.state.options}></MenuList>
            </div>

            <div className="col-md-4" >
              <Pedidos coleccionPedidos={this.state.pedidos} eliminar= {this.removeTodo} handleClick={this.handleClick}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;



