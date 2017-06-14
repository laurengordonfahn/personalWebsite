import React, { Component } from 'react';
import Menu from './menu';
import BibliographyText from './bibliographyText';
// import logo from '../logo.svg';
// import '../App.css';



class App extends Component {
  constructor() {
    super();
    this.state = {
      aboutMe:[{"One Year Goal": "A Front End Developement Role"}, {"Three Year Goal": "Still Loving that Front End Development Role"}, {"Ten Year Goal": "king over the world with all powerful Javascript skills"}, {"Favorite Color": "Yellow"}, {"In My Spare Time": "Reinventing daily mechanical items, taking a walk"}, {"Favorite Article of Clothing": "black tee-shirt"}, {"Favorite Coding Language": "Javascript!"}, {"Random Fact": "I love dential floss"}],
      selects: ["Homepage", "Academics", "Links", "Resume"],
      schools: ["Hamilton(B.S.Theoretical Math)", "NESA(Masters of Acupuncture and Chinese Medicine)", "Hackbright("],
      pageOn: "Homepage",
      sectionOn: ""
    };
  }


  render() {
    return (
      <div className="App">

        <h1 className="App-header"> Lauren Gordon-Fahn
        </h1>

        <Menu selects={this.state.selects} />
        <BibliographyText aboutMe={this.state.aboutMe} />

      </div>
    );
  }
}

export default App;
