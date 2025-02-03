/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
import React, { Component } from 'react';
import './App.css';
import { Header, Grid, Menu } from 'semantic-ui-react'
import { AboutMe, Education, Publications, Awards, Works, Teaching } from './AboutMe.js';

import { BrowserRouter } from "react-router-dom";
import { genericHashLink as Link } from 'react-router-hash-link';
import { Waypoint } from 'react-waypoint';

//import { AnchorLink as Link } from "gatsby-plugin-anchor-links";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.namedict = {'About Me': 0, 'Education': 1, 'Work Experience': 2, 'Publications': 3, 'Awards and Honors': 4, 'Teaching': 5};
    this.state = {activeItems: [false, false, false, false, false, false]}
    this.names = ['About Me', 'Education', 'Work Experience', 'Publications', 'Awards and Honors', 'Teaching'];
  }
  
  hi = (name) => {
    let prvState = [...this.state.activeItems];
    prvState[this.namedict[name]] = true;
    this.setState({activeItems: [...prvState]});
  }
  bye = (name) => {
    let prvState = [...this.state.activeItems];
    prvState[this.namedict[name]] = false;
    this.setState({activeItems: [...prvState]});
  }
  handleItemClick = (e, { name }) => {
    let prvState = [...this.state.activeItems];
    prvState[this.namedict[name]] = true;
    this.setState({activeItems: [...prvState]});
  }
  /*
  getNowState = () => {
    for(var i=0;i<6;i++){
      if(this.state.activeItems[i]) return this.names[i];
    }
    return 'About Me';
  };*/
  getNowState = (name) => this.state.activeItems[this.namedict[name]];
  render(){
  const { activeItem } = this.state
  return (
    <BrowserRouter>
    <div className="App">
      <div className="Name-Div Title-mobile">
        <Header as='h1' className="MyName">Jihoon Ko</Header>
      </div>
      <Grid className="MainGrid">
        <Grid.Column width={12} className="Main">
          <div id="aboutme">
          <Waypoint name="About Me"
            onEnter={() => this.hi("About Me")}
            onLeave={() => this.bye("About Me")}
            onClick="location.href('/#aboutme')"
          ><AboutMe />
          </Waypoint>
          </div>
          <div id="education">
          <Waypoint name="Education"
            onEnter={() => this.hi("Education")}
            onLeave={() => this.bye("Education")}
          ><Education /></Waypoint></div>
          <div id="works">
          <Waypoint name="Work Experience"
            onEnter={() => this.hi("Work Experience")}
            onLeave={() => this.bye("Work Experience")}
            ><Works /></Waypoint></div>
          <div id="publications">
          <Waypoint name="Publications"
            onEnter={() => this.hi("Publications")}
            onLeave={() => this.bye("Publications")}
            ><Publications /></Waypoint></div>
          <div id="awards">
          <Waypoint name="Awards and Honors"
            onEnter={() => this.hi("Awards and Honors")}
            onLeave={() => this.bye("Awards and Honors")}
            ><Awards /></Waypoint></div>
          <div id="teaching">
          <Waypoint name="Teaching"
            onEnter={() => this.hi("Teaching")}
            onLeave={() => this.bye("Teaching")}
            ><Teaching /></Waypoint></div>
        </Grid.Column>

        <Grid.Column width={4} className="RightSidebar">
          <div className="Name-Div">
            <Header as='h1' className="MyName">Jihoon Ko</Header>
          </div>
          <Menu pointing secondary vertical right>
            <Menu.Item
              as="a"
              href='/#aboutme'
              name='About Me'
              active={this.getNowState('About Me')}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as="a"
              href='/#education'
              name='Education'
              active={this.getNowState('Education')}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as="a"
              href='/#works'
              name='Work Experience'
              active={this.getNowState('Work Experience')}
              onClick={this.handleItemClick}
              />
            <Menu.Item
              as="a"
              href='/#publications'
              name='Publications'
              active={this.getNowState('Publications')}
              onClick={this.handleItemClick}
              />
            <Menu.Item
              as="a"
              href='/#awards'
              name='Awards and Honors'
              active={this.getNowState('Awards and Honors')}
              onClick={this.handleItemClick}
              />
            <Menu.Item
              as="a"
              href='/#teaching'
              name='Teaching'
              active={this.getNowState('Teaching')}
              onClick={this.handleItemClick}
              />
          </Menu>
        </Grid.Column>
      </Grid>
    </div>
    </BrowserRouter>
  );
  }
}

//export default App;
