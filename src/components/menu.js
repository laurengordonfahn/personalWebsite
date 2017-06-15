import React, { Component } from 'react';
var Scroll  = require('react-scroll');

var Link       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

class Menu extends Component {
    constructor() {
      super();
      this.renderPageOptions = this.renderPageOptions.bind(this);
    }

    renderPageOptions(elem) {
      if(elem !=="Links"){
        return(
           <Link activeClass="active" to={elem} spy={true} smooth={true} offset={0} duration={500} onSetActive={this.handleSetActive}>
            <button key={elem} type="button" value={elem}> {elem} </button>
          </Link>

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