import React, { Component } from 'react';
import Scroll from 'react-scroll';
import ScrollEvent from 'react-onscroll';

import Header from './header';
import MainMenu from './mainMenu';
import LinkMenu from './linkMenu';
import DictionarySection from './dictionarySection';
import TextSection from './textSection';

import yourImg from '../yourImg.jpg';
import calendarGlyph from '../calendar.png';
import notebookGlyph from '../notebook.png';
import newspaperGlyph from '../newspaper.png';
import facebookGlyph from '../facebook.png';
import githubGlyph from '../github.png';
import linkedInGlyph from '../linkedin.png';


var Link       = Scroll.Link;
var Element    = Scroll.Element;


class App extends Component {
  constructor() {
    super();
    this.handleClick= this.handleClick.bind(this);
    this.handleScrollCallback = this.handleScrollCallback.bind(this);

    this.state = {
      yourName: "Lauren Gordon-Fahn",
      oneLiner: "Junior Developer, In Love With Javascript!",
      yourImg: yourImg,
      pageSections: ["Top", "Overview", "Academics", "Projects", "Stack", "About Me", "Work Experience"],

      overView: [
        {"One Year Goal": "A Front End Developement Role"}, 
        {"Five Year Goal": "Still Loving that Front End Development Role"}, 
        {"Undergraduate School":"Hamilton College B.S. Theoretical Mathmatics"}, 
        {"Graduate School":"New England School of Acupuncture Masters in Acupuncture and Oriental Medcine"}, 
        {"Favorite Language":"Javascript"}, 
        {"Ten Year Goal":"Taking over the world with Javascript"} 
      ],

      aboutMe:[
        {"Favorite Color": "Yellow"}, 
        {"In My Spare Time": "Reinventing daily mechanical items, taking a walk"}, 
        {"Favorite Article of Clothing": "Black Tee-Shirt"}, 
        {"Random Fact": "I love dential floss"}
      ],
      
      linkOptions:[
        [{
          "name":"LinkedIn", "byline":"link","link": "https://www.linkedin.com/in/lauren-gordon-fahn/", "img":linkedInGlyph
        }], 
        [{
          "name":"GitHub", "byline":"link", "link": "https://github.com/laurengordonfahn", "img": githubGlyph
        }],
        [{ 
          "name": "Facebook", "byline":"link","link": "https://www.facebook.com/search/top/?q=Lauren+Gordon+New&init=public", "img": facebookGlyph
        }], 
        [{
          "name": "Daily", "byline": "project", "link": "http://dailytrackingcalendar.herokuapp.com", "img": calendarGlyph
        }], 
        [{
          "name": "Notebook", "byline": "project", "link": "http://notebookonline.herokuapp.com", "img": notebookGlyph
        }]
      ],

      stack:[
        [
          {"Languages":["Python","Ruby","JavaScript(ES6, Ajax, JSON)", "HTML", "CSS", "SQL"]},
          {"Operating Systems":["Mac OS X", "Linux"]},
          {"Frameworks/Libraries": ["Flask", "React", "jQuery", "Bootstrap"]},
          {"Database/Tools": ["PostgreSQL", "Git", "Github", "Command Line"]}
        ]
      ],

      projects: [
        [
          {"first": "Daily"},
          {"none": "An emotion tracking calendar. A personal calendar that enables users to summarize their emotions from a day in three adjectives and a representative color. With trending graphics and easy at-a-glance understanding of how they are feeling over time. Built with React and a Flask server."},
          {"Tech Stack": [" PostgreSQL, SQLAlchemy, Python, Flask, React, Javascript, Ajax, Unittest"]},
          {"Github": ["https://github.com/laurengordonfahn/daily"]},
          {"Online": ["https://dailytrackingcalendar.herokuapp.com"]},
          {"first": "Notebook"},
          {"none": "A one page dynamic notebook application. Built on a Flask RESTful API. Allows a user to create, edit, reorganize, and delete notes. Sign-In with Facebook."
          },
          {"Tech Stack": ["PostgreSQL, SQLAlchemy, Python, Flask, Javascript, jQuery, Ajax, OAuth2, Unittest"]},
          {"Github": [" https://github.com/laurengordonfahn/notebook"]},
          {"Online": [" https://notebookonline.herokuapp.com"]}
        ],

      ],

      experience: [
        // [
        //   {"github":["laurengordonfahn"]},
        //   {"linkedin": ["linkedin.com/in/lauren-gordon-fahn"]}
        // ],
        [
          {"first": "Experience"},
          {"third": "Acupuncturist Gordon Medical Associates:"},
          {"third": "Santa Rosa, CA - 2014-2016"},
          {"none": "Translated Eastern techniques into Western context in weekly educational presentations to physicians, helping reprioritize treatment protocols.  \n Regularly improving treatment time and providing better patient outcomes. \n Educated patients on techniques to support their medical progress. \n 2015-2016 patient Acupuncturist and Herbalist."
          },
          {"third": "Meditation Instructor/Acupuncturist/Owner Second Arrow Healing:"},
          {"third": "Petaluma, CA - 2014-2016"},
          {"none": "Created content for monthly educational newsletters and advertising. \n Wrote and taught meditation classes and workshops. \n Created specialized treatment protocols for patients through herbs, meditation, and acupuncture."
          }     
        ]
      ],
      academics: [
        [
          {"first" : "Hamilton College"}, 
          {"second": "2002-2006"},
          {"second": "B.S.Theoretical Math"}, 
          
          {"Traits of Math Mind":  
            [
              "Logical Thought", "Organization of large bodies of information", "A love for Algorithmic thought", "The importance of examiing a problem near and far"
            ]
          }
        ],
        [
          {"first" : "New England School of Acupuncture"}, 
          {"second": "2011-2014"},
          {"second": "Masters of Acupuncture and Oriental Medicine"}, 
          
          {"Traits of an Acupuncture's Thinking":  
            [
              "Enjoying the process of listening to others problems and offering options with compassion", "Asking Constructive, timely, questions", "Organizing stratigic long term plans for treatment", "Explaining information that is not native to someone", "merging and explaining two different perspecitives on treatment", "problem solving with in the confines of what patients are willing and able to do"
            ]
          }
        ],
        [
          {"first" : "Hackbright Academy"}, 
          {"second": "Sept 2016-Dec 2016"},
          {"second": "Certificate of Completion Software Fellowship"}, 
          
          {"Traits of an Bootcamp Graduate":  
            [
              "Fast learner", "Deadicated to learning and exploring technology", "Finding Creative ways to integrate past life skills to make exciting projects", "Being humble and googling my heart out"
            ]
          }
        ]   
      ],

      subSection: "Overview",
      isTop: false,
      // scrollPosition: {top:'0px'}
    
    };
  }

  handleScrollCallback() {
  
      // console.log("window scroll y position", window.scrollY);
      // let scrollPosition = this.state.scrollPosition;

      if(window.scrollY > 430){
        
        this.setState({isTop : true});
      } 
      else if (window.scrollY < 430) {
        this.setState({isTop: false});
      }
  }

  handleClick(to) {
    
    // var menuClass = document.getElementsByClassName("menu")[0];
    if (to ==="Overview") {
     
      this.setState({isTop: false, subSection: to});

      
    } 
    else if (to === "Top") {
      this.setState({isTop: true, subSection: to});
    }
    else if (to !== "Overview"){

      this.setState({isTop: false, subSection: to});
      
    }
    
   
  }

  render() {
    return (
      <div className="App">

        <ScrollEvent handleScrollCallback={this.handleScrollCallback} />
        <Element name="Top" className="element">  
          <Header name="header" yourImg={this.state.yourImg} />
        </ Element>

        <MainMenu name="mainMenu" pageSections={this.state.pageSections} menuStyle={this.state.scrollPosition} yourName={this.state.yourName} oneLiner={this.state.oneLiner} isTop={this.state.isTop} handleClick={this.handleClick} linkOptions={this.state.linkOptions} linkOptions={this.state.linkOptions}/>

         <Element name="Overview" className="element">
           <DictionarySection name="Overview" stateName={this.state.overView} />
        </Element>
        

         <Element name="Academics" className="element">
          <TextSection name="Academics" stateName={this.state.academics} />
        </Element>

        <Element name="Projects" className="element">
          <TextSection name="Projects" stateName={this.state.projects} />
        </Element>

        <Element name="Stack" className="element">
          <TextSection name="Stack" stateName={this.state.stack} />
        </Element>

        <Element name="About Me" className="element">
          <DictionarySection name="About Me" stateName={this.state.aboutMe} />
        </Element>
        
        <Element name="Work Experience" className="element">
          <TextSection name="Work Experience" stateName={this.state.experience} />
        </Element>

      </div>
    );
  }
}

export default App;
