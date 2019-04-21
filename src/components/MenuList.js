import React, { Component } from 'react';

class MenuList extends Component {
  constructor () {
    super();
    this.state = {
      menu: [],
      options: "desayuno"
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

  render() {
      const menu = this.state.menu.filter(item => item.category === this.state.options).map((menuIndividual, i)=>{
      return(
        <div className="col-md-8" key={i}>
            <div className="card-title text-center">
              <button
              className = "btn boton"
              value = {menuIndividual.title}
              onClick={() => {this.props.onAddTodo({ ...menuIndividual })}}
              >
              {menuIndividual.title}
              </button>
            </div>
        </div>
      )
    })
    return (
      <div className="card">
        <div>
          <button
              className = "btn btn-primary"
              value = "desayuno"
              onClick={this.mostrarMenuElegido}
              >
              Desayuno
          </button>
          <button
              className = "btn btn-primary"
              value = "resto del dia"
              onClick={this.mostrarMenuElegido}
              >
              Resto del dia
          </button>
        </div>
        <div className="form-group mt-4">
          {menu}
        </div>

      </div>
    )
  }
}

export default MenuList;