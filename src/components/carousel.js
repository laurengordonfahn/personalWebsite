import React, { Component } from 'react';
import LinkImages from './linkImages';

class Carousel extends Component {
  constructor(){
    super();
    this.renderCarouselImg = this.renderCarouselImg.bind(this);
    this.renderLinkImgDiv = this.renderLinkImgDiv.bind(this);
  }

  renderCarouselImg(img, i) {
    let isCurrent = this.props.isCurrent;
    return ( 
      
        <li key={img}>
          <img className="carouselImg" className={i === isCurrent ? "isSeen": "isNotSeen"} src={img} alt={img} />
        </li>
      
      );
  }

  renderLinkImgDiv(linkImg){
    let name=linkImg.name;
    let byline=linkImg.byline;
    let link=linkImg.link;
    let img=linkImg.img;

    return(
      <LinkImages key={link} name={name} byline={byline} link={link} img={img} />
      
    );
        
  }

  render() {
    let name = "carousel" + this.props.name
    let lenCarousel = this.props.imgList.length;
    if (lenCarousel > 1){
      return (
        <div className="imgCarouselDiv">
          <div className={name}>
           
            <ul className="imgCarouselList">

              {this.props.imgList.map((img, i) => {
                return this.renderCarouselImg(img, i);
              })}

            </ul>

            <div className="btnCarouselDiv">
              <div className="carouselDirectBtnDiv">
                <div className="btnbackwardImg" value="backward" onClick={(e) => {this.props.handleBackwardClick} }> &larr; </div>
                <div className="btnforwardImg" value="forward" onClick={(e) => {this.props.handleForwardClick} } > &rarr; </div>
              </div>
              <div className="carouselLinkBtnDiv">
                {this.props.carouselInfo.linkImg.map(linkImg => { return this.renderLinkImgDiv(linkImg)})}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="imgCarouselDiv">
          <div className={name}>
           
            <ul className="imgCarouselList">

              {this.props.imgList.map((img, i) => {
                return this.renderCarouselImg(img, i);
              })}

            </ul>
            <div className="carouselLinkBtnDiv">
                {this.props.carouselInfo.linkImg.map(linkImg => { return this.renderLinkImgDiv(linkImg)})}
            </div>
          </div>
        </div>
      );
    }

  }
}

export default Carousel;
