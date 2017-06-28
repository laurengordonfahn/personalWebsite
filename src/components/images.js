import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Images extends Component {
 
  render() {
    return (
      <div className="ImagesSection">
        <div className={this.props.name} >


          <div className="ImagesDiv">

            <img className="projectImg" src={this.props.img} alt={this.props.img} />
          
          </div>
        </div>
      </div>
    );
  }
}

Images.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string
}

export default Images;