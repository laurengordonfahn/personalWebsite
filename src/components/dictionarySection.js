import React, { Component } from 'react';

class DictionarySection extends Component {
  constructor(){
    super();
    this.renderDictionaryInfo = this.renderDictionaryInfo.bind(this);
    
  }

  renderDictionaryInfo(elem) {
    let elemKey = Object.keys(elem)[0]
    let elemVal = elem[elemKey]
    return ( 
      <div key={elemKey} >
        <p className="dictKey">{elemKey}:</p> 
        <p className="dictVal"> {elemVal} </p> 
      </div>
      );
  }

  render() {
    return (
      <div className={this.props.name}>
        <h1 className="dictHeader"> {this.props.name} </h1>
        <div className="dictText">

          {this.props.stateName.map(elem => {
            return this.renderDictionaryInfo(elem);
          })}

        </div>
      </div>
    );
  }
}

export default DictionarySection;
