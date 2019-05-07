import React, { Component } from 'react';

class MenuList extends Component {


  render() {
    let prueba = this.props.menu;

      const menu = prueba.filter(item => item.category === this.props.options).map((menuIndividual, i)=>{
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
              onClick={this.props.mostrarMenuElegido}
              >
              Desayuno
          </button>
          <button
              className = "btn btn-primary"
              value = "resto del dia"
              onClick={this.props.mostrarMenuElegido}
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