import React, { Component } from 'react';

class BibliographyText extends Component {
  constructor(){
    super();
    
  }

  renderAboutMe(elem) {
    return ( 
      <h3 className="listTitle">{Object.keys(elem)[0]}: {Object.keys(elem).map(keyElem => { return elem[keyElem]})}</h3> 
      );
  }

  render() {
    return (
      <div className="bibliographyText">
        <h1 className="biblioHeader"> About Me </h1>
        <p className="biblioText">

          {this.props.aboutMe.map(elem => {
            return this.renderAboutMe(elem);
          })}

        </p>
      </div>
    );
  }
}

export default BibliographyText;
