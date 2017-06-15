import React, { Component } from 'react';
// import logo from '../logo.svg';
// import '../App.css';

class Menu extends Component {
    constructor() {
      super();
      this.renderPageOptions = this.renderPageOptions.bind(this);
    }

    renderPageOptions(elem) {
      if(elem !=="Links"){
        return(
            <button key={elem} type="button" value={elem}> {elem} </button>
        );
      } else{
        let options = this.props.linkOptions.map(link => {
          let linkKey = Object.keys(link)[0];
          let linkVal = link[linkKey];
          return(<option key={linkKey} value={linkVal}>{linkKey}</option>);
        })
        return(
            <select key={elem}>
              <option selected disabled> {elem} </option>
              {options}
            </select>
          
        );
      }

    }

  render() {
    return (
      <div className="menu">
        
        {this.props.pageSections.map(elem => {
          return this.renderPageOptions(elem);
        })}
        
        
      </div>
    );
  }
}

export default Menu;