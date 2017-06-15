import React, { Component } from 'react';
import Scroll from 'react-scroll';

import Menu from './menu';
import DictionarySection from './dictionarySection';
import List from './list';
import TextSection from './textSection';

var Link = Scroll.Link;
var Element = Scroll.Element;
var Event = Scroll.Event;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

class App extends Component {
  constructor() {
    super();
    this.handleSetActive = this.handleSetActive.bind(this);

    this.state = {
      pageSections: ["OverView", "Academics", "Projects", "Stack", "About Me", "Resume", "Links"],

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
        {"LinkedIn":"https://www.linkedin.com/in/lauren-gordon-fahn/"}, 
        {"GitHub":"https://github.com/laurengordonfahn"}, 
        {"Facebook":"https://www.facebook.com/search/top/?q=Lauren+Gordon+New&init=public"}, 
        {"Project Website : Daily":"http://dailytrackingcalendar.herokuapp.com"}, 
        {"Project Website: Notebook":"http://notebookonline.herokuapp.com"}
      ],

      stack: ["Python", "Ruby", "Javascript", "React", "jQuery", "SQL", "PostgreSql", "Flask"],

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

      resume: [
        [
          {"github":["laurengordonfahn"]},
          {"linkedin": ["linkedin.com/in/lauren-gordon-fahn"]}
        ],
        [
          {"Languages":["Python","Ruby","JavaScript(ES6, Ajax, JSON)", "HTML", "CSS", "SQL"]},
          {"Operating Systems":["Mac OS X", "Linux"]},
          {"Frameworks/Libraries": ["Flask", "React", "jQuery", "Bootstrap"]},
          {"Database/Tools": ["PostgreSQL", "Git", "Github", "Command Line"]}
        ],
        [
          {"first": "Projects"},
          {"third": "Daily"},
          {"none": "An emotion tracking calendar. A personal calendar that enables users to summarize their emotions from a day in three adjectives and a representative color. With trending graphics and easy at-a-glance understanding of how they are feeling over time. Built with React and a Flask server."},
          {"Tech Stack": [" PostgreSQL, SQLAlchemy, Python, Flask, React, Javascript, Ajax, Unittest"]},
          {"Github": ["https://github.com/laurengordonfahn/daily"]},
          {"Online": ["https://dailytrackingcalendar.herokuapp.com"]},
          {"third": "Notebook"},
          {"none": "A one page dynamic notebook application. Built on a Flask RESTful API. Allows a user to create, edit, reorganize, and delete notes. Sign-In with Facebook."
          },
          {"Tech Stack": ["PostgreSQL, SQLAlchemy, Python, Flask, Javascript, jQuery, Ajax, OAuth2, Unittes"]},
          {"Github": [" https://github.com/laurengordonfahn/notebook"]},
          {"Online": [" https://notebookonline.herokuapp.com"]}
        ],
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
        ], 
        [ 
          {"first": "Education"},
          {"Hackbright Academy":  
            [
              " - Software Engineering Fellowship (2016) \n Accelerated, 12-week, software engineering program for women."
            ]
          },
          {"New England School of Acupuncture":  
            [
              "- MAcOM (2011-2014)"
            ]
          },
          {"Hamilton College":  
            [
              " - B.S. Theoretical Mathematics (2002-2006)"
            ]
          }    
        ]
      ],
      academics: [
        [
          {"first" : "Hamilton College"}, 
          {"second": "2002-2006"},
          {"second": "B.S.Theoretical Math"}, 
          {"none": "No i am not a human calculator. Theoretical mth is writing proofs, logical english papers, proving that major mathmatical principles hold and have predicablel behavior."}, 
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
          {"none": "I love puzzles. The human body is the most mysterious. I love working with people to solve their problems. To teach people how to help themselves. Chinese medcine has an entire different perspecitive for how the body is impacted by its environment then Western Medicine. I love western medical teachings and I studied Chinese medicine to work with Western Physicans to integrate the strengths of both."}, 
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
          {"none": "Coding is like doing Math Homework Everyday, something I love. I want to organize large amounts of data and make it accessible. Technology should be used to make lives easier, healthier, and more enjoyable, well organized information that easy to access for the user is the a large way I can do what I love and give back."}, 
          {"Traits of an Bootcamp Graduate":  
            [
              "Fast learner", "Deadicated to learning and exploring technology", "Finding Creative ways to integrate past life skills to make exciting projects", "Being humble and googling my heart out"
            ]
          }
        ]   
      ],

      subSection: "OverView"
    };
  }

  handleSetActive(to) {
    console.log(to);
  }

  render() {
    return (
      <div className="App">

        <h1 className="App-header"> Lauren Gordon-Fahn
        </h1>

        <Menu pageSections={this.state.pageSections} linkOptions={this.state.linkOptions}/>

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
          <List name="Stack" stateName={this.state.stack} />
        </Element>

        <Element name="About Me" className="element">
          <DictionarySection name="About Me" stateName={this.state.aboutMe} />
        </Element>
        
        <Element name="Resume" className="element">
          <TextSection name="Resume" stateName={this.state.resume} />
        </Element>

      </div>
    );
  }
}

export default App;
