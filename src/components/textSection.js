import React, { Component } from 'react';
// import Images from './images';
import LinkImages from './linkImages';
import Carousel from './carousel';
class TextSection extends Component {
  constructor(){
    super();
    this.renderText = this.renderText.bind(this);
    this.renderLinkImgDiv = this.renderLinkImgDiv.bind(this);
    this.handleForwardClick = this.handleForwardClick.bind(this);
    this.handleBackwardClick = this.handleBackwardClick.bind(this);
    this.state = {
      isCurrent: 0
    };
  }

  handleBackwardClick(e, lenCarousel) {
      console.log("backward",lenCarousel);
      let current = this.state.isCurrent;
      console.log("isCurrent", current);
      if ((current - 1) !== -1) {
        current = (current - 1)%lenCarousel;
        this.setState({isCurrent: current});
      } 
      else{ 
        current = (lenCarousel -1);
        this.setState({isCurrent: current});
      }
    }

    handleForwardClick(e, lenCarousel) {
      console.log("forward",lenCarousel);
      let current = this.state.isCurrent;
      console.log("isCurrent", current);
      current = (current + 1)%lenCarousel;
      this.setState({isCurrent: current});
    }


  renderLinkImgDiv (obj) {
    let name=obj.name;
    let link=obj.link;
    let img=obj.img;

    return(
      <LinkImages key={link} name={name} link={link} img={img} />
      
    );
        
  }

  renderText(elem) {
    
    return elem.map(miniDict => { 
      
      const indKey = Object.keys(miniDict)[0];
      const indVal = miniDict[indKey];
      
    
      if(indKey ==="first" || indKey==="none"){
        
        return ( 
          
          <div key={indVal} className={indKey}>{indVal} </div> 
         
        );

      } 
      else if (indKey ==="img"){
        let imgList = indVal["img"];
    
        return(

          <Carousel key={elem[indKey]} name={this.props.name} isCurrent={this.state.isCurrent} imgList={imgList} carouselInfo={miniDict[indKey]} handleBackwardClick={this.handleBackwardClick} handleForwardClick={this.handleForwardClick} />
        );
      } 
      
      else if (indKey==="linkImg"){
        
        return(
          <div className="textLinkImgDiv">
            {indVal.map(obj => {
              return this.renderLinkImgDiv(obj);
            })}
          </div>
        );
      }

      else {
      
        const li = miniDict[indKey].map(item => {
          
          return (<li key={item} className="textList"> {item} </li>);
        });

        return (
          <div key={indVal} className="textDict">
            <ul> <span className="textListHeader"> {indKey} </span> {li} </ul>
          </div>
        );
      }
        
    });
  
  }

  render() {
    
    return (
      <div className="textSection">
        <div className={this.props.name} >
          <div className="textHeader"> {this.props.name} </div>
          <div className="textText">

            {this.props.stateName.map(elem => {
              return this.renderText(elem);
            })}

          </div>
        </div>
      </div>
    );
  }
}

export default TextSection;