import React, { Component } from 'react';
import Scroll from 'react-scroll';
import ScrollEvent from 'react-onscroll';
import ReactTimeout from "react-timeout";

import Header from './header';
import Menu from './menu';
import LinkMenu from './linkMenu';
import TextSection from './textSection';
import List from './list';

import yourImg from '../images/lauren_headshot.jpg';
import calendarGlyph from '../images/calendar.png';
import notebookGlyph from '../images/notebook.png';
import newspaperGlyph from '../images/newspaper.png';
import facebookGlyph from '../images/facebook.png';
import githubGlyph from '../images/github.png';
import linkedInGlyph from '../images/linkedin.png';
import daily1 from '../images/daily1b.png';
import daily2 from '../images/daily2b.png';
import daily3 from '../images/daily3b.png';
import notebook1 from '../images/notebook1b.png';
import notebook2 from '../images/notebook2b.png';
import resume from '../images/LaurenGordon-Fahn_Resume7_17.pdf';

var Element = Scroll.Element;


class App extends Component {
  constructor() {
    super();
    this.handleClick= this.handleClick.bind(this);
    this.handleScrollCallback = this.handleScrollCallback.bind(this);
    this.reSetOffSet = this.reSetOffSet.bind(this);

    this.state = {
      yourName: "Lauren Gordon-Fahn",
      oneLiner: "Junior Developer, In Love With JavaScript!",
      yourImg: yourImg,
      pageSections: ["Projects", "Stack", "About Me", "Contacts"],

      aboutMe:[
        [
          {"none": "I am a passionate and compassionate problem solver with a B.S. in Theoretical Mathematics, a Masters in Acupuncture & Chinese Medicine, and Hackbright bootcamp under my belt. I am in love with making organization tools that are user friendly through software engineering. I love solving problems with a team, be it engineers or doctors."}
        ],
        [
          {"third":
            {"Traits of a Math Mind":  
            
             [ "A love for logical thought and problem solving", "Organization of large bodies of information", "The importance of abstraction in solving problems"]
            }
          }
        ],
        [
          {"third":
            {"Traits of an Acupuncturist" : 
              
                ["Listening", "Dedicated to team work", "Organizing strategic long term plans for treatment", "Explaining information that is not native to someone"]
            }
          }
        ],
        [
          {"third":
            {"Traits of a Bootcamp Graduate":  
              
                ["Fast dedicated learner", "Being humble and googling my heart out"]
            }
          }
        ]
      ],
      
      linkOptions:[
        [{
          "name":"LinkedIn", "byline":"LinkedInlink","link": "https://www.linkedin.com/in/lauren-gordon-fahn/", "img":linkedInGlyph
        }], 
        [{
          "name":"GitHub", "byline":"GitHublink", "link": "https://github.com/laurengordonfahn", "img": githubGlyph
        }],
        [{ 
          "name": "Facebook", "byline":"facebookLink","link": "https://www.facebook.com/search/top/?q=Lauren+Gordon+New&init=public", "img": facebookGlyph
        }], 
        [{
          "name": "Daily App", "byline": "DailyProjectLink", "link": "http://dailytrackingcalendar.herokuapp.com", "img": calendarGlyph
        }], 
        [{
          "name": "Notebook App", "byline": "NotebookProjectLink", "link": "http://notebookonline.herokuapp.com", "img": notebookGlyph
        }],
        [{
          "name": "Resume", "byline": "Resume", "link": resume, "img": newspaperGlyph
        }]
      ],

      stack:[
        [ {"Languages":["Python","Ruby","JavaScript(ES6, React, JSON)", "HTML", "CSS", "SQL"]},
          {"Operating Systems":["Mac OS X", "Linux"]},
          {"Frameworks/Libraries": ["Flask", "React", "Ajax", "jQuery", "Bootstrap"]},
          {"Database/Tools": ["PostgreSQL", "Git", "Github", "Command Line"]}
        ]
      ],

      projects: [
        [ {"first": "Daily"},
          {"img": {
            "name":"Daily", "byline":"dailyimg", "img": [daily1, daily2, daily3], "linkImg": [
              {
              "name":"GitHub", "byline":"githublink", "link": "https://github.com/laurengordonfahn/daily", "img": githubGlyph
              },
              {
              "name":"Daily", "byline":"projectlink",  "link": "https://dailytrackingcalendar.herokuapp.com", "img": calendarGlyph
              }
            ]
          }},
          {"none": "Daily is an emotion tracking calendar in which users summarize their emotions on a day-to-day basis.  It provides trending graphics and at-a-glance understanding of how the user's mood changes over time. Built with React and a Flask API."},
          {"Tech Stack": [" PostgreSQL, SQLAlchemy, Python, Flask, React, JavaScript, Ajax, Unittest"]}
        ],
        [
          {"first": "Notebook"},
          {"img": {
            "name":"Notebook", "byline":"notebookimg1", "img": [notebook1, notebook2], "linkImg": [
              {
              "name":"GitHub", "byline":"GitHubLink", "link": "https://github.com/laurengordonfahn/notebook", "img": githubGlyph
              },{
              "name":"Notebook", "byline":"projectLink", "link": "https://notebookonline.herokuapp.com", "img": notebookGlyph
              }
            ]
          }},
          {"none": "Notebook is a one-page dynamic notebook application which allows users to create, edit, organize, and delete notes.  Facebook Sign-In is used for authentication and the app is powered by a RESTful API written with Flask."
          },
          {"Tech Stack": ["PostgreSQL, SQLAlchemy, Python, Flask, JavaScript, jQuery, Ajax, OAuth2, Unittest"]}
        ],
      ],
      subSection: "Overview",
      isTop: false,
      y: window.scrollY ,
      offSetVal: -150,
      headerHeight: 260
    };
  }

  reSetOffSet() {
    this.props.setTimeout(
      function() {
        this.setState({ offSetVal: -80 });
      }.bind(this), 8
    );
  }

  handleScrollCallback() {
    const headerHeight = this.state.headerHeight
    if (window.scrollY > 310){
      this.reSetOffSet();
      let sections = this.state.pageSections;
      if (sections[0] !== 'Top') {
        sections.unshift('Top');
        this.setState({pageSections : sections}); 
      }
      
    } else {
      let sections = this.state.pageSections.filter(val => val !== 'Top');
      this.setState({pageSections : sections}); 
    }

    if (window.scrollY > headerHeight){
      
      this.setState({isTop : true});
    } 
    else if (window.scrollY < headerHeight) {
    
      this.setState({isTop: false, offSetVal: -150});
    }
  }

  handleClick(to) {
    const headerHeight = this.state.headerHeight
    if (to === "Projects") {
      if (this.state.y < headerHeight){
        this.setState({isTop: false, offSetVal: -150,subSection: to});
      } else {
      this.setState({isTop: false, offSetVal: -80,subSection: to});
      }
    } 
    
    else if (to === "Top") {
      this.setState({isTop: false, offSetVal: -80, subSection: to});
    }
    else if (to !== "Projects"){

      this.setState({isTop: false, offSetVal: -80, subSection: to});
      
    }
  }

  render() {
    return (
      <div className="App">

        <ScrollEvent 
          handleScrollCallback={this.handleScrollCallback} 
        />

        <Element name="Top" className="element">
          <Header 
            name="header" 
            yourImg={this.state.yourImg} 
            yourName={this.state.yourName} 
            oneLiner={this.state.oneLiner} 
          />
        </ Element>
        
         <Menu 
          name="Menu" 
          pageSections={this.state.pageSections} 
          isTop={this.state.isTop} 
          handleClick={this.handleClick} 
          linkOptions={this.state.linkOptions}
          offSetVal={this.state.offSetVal} 
        />
        

        <Element name="Projects" className="element">
          <TextSection 
            name="Projects" 
            stateName={this.state.projects} 
          />
        </Element>

        <Element name="Stack" className="element">
          <List name="Stack" stateName={this.state.stack} />
        </Element>

        <Element name="About Me" className="element">
          <TextSection name="About Me" stateName={this.state.aboutMe} />
        </Element>

        <Element name="Contacts" className="element">
          <LinkMenu linkOptions={this.state.linkOptions} />
        </Element>
        
      </div>
    );
  }
}

export default ReactTimeout(App);
