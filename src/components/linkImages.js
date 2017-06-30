import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LinkImages extends Component {
 

  render() {
    // let classN = "LinkImagesSection" + " " + this.props.byline
    return (
      
      <div className="imgLinkDiv">  
        <a  key={this.props.link} className="imgLinkAnchor " href={this.props.link}>
         
          <img className="linkImg" src={this.props.img} alt={this.props.name} /> 
         
        </a>
      </div>
      
      
    );
  }
}

LinkImages.propTypes = {
    link: PropTypes.string,
    name: PropTypes.string
}
export default LinkImages;