import React, { Component } from 'react';
// import logo from '../logo.svg';
// import '../App.css';

class Menu extends Component {
    constructor() {
        super();
    }

    renderSelects(elem) {
        return(
            <option value={elem}> {elem} </option>
        );
    }

  render() {
    return (
      <div className="menu">
        <select>
            {this.props.selects.map(elem => {
                return this.renderSelects(elem);
            })}
        </select>
      </div>
    );
  }
}

export default Menu;