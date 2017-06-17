import React, { Component } from 'react';

class TextSection extends Component {
  constructor(){
    super();
    this.renderText = this.renderText.bind(this);
    
  }

  renderText(elem) {
    
    return elem.map(miniDict => { 
      
      const indKey = Object.keys(miniDict)[0];
      const indVal = miniDict[indKey];
    
      if(indKey ==="first" || indKey==="second" || indKey==="third" || indKey==="none"){

        return ( 
          <div key={indVal} className={indKey}>{indVal} </div> 
        );

      } else {
      
        const li = miniDict[indKey].map(item => {
          
          return (<li key={item}> {item} </li>);
        });

        return (
          <div key={indVal} className="textSecond"> {indKey} 
            <ul> {li} </ul>
          </div>
        );
      }
        
    });
  
  }

  render() {
    
    return (
      <div className={this.props.name} >
        <h1 className="textHeader"> {this.props.name} </h1>
        <div className="textText">

          {this.props.stateName.map(elem => {
            return this.renderText(elem);
          })}

        </div>
      </div>
    );
  }
}

export default TextSection;