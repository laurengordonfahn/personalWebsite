import React, { Component } from 'react';

class List extends Component {
  constructor(){
    super();
    this.renderList = this.renderList.bind(this);
    
  }

  renderList(elem) {
    return ( 
      <p key={elem} className="listItem">{elem} </p> 
    );
  }

  render() {
    return (
      <div className={this.props.name} >
        <h1 className="listHeader"> {this.props.name} </h1>
        <div className="listText">

          {this.props.stateName.map(elem => {
            return this.renderList(elem);
          })}

        </div>
      </div>
    );
  }
}

export default List;