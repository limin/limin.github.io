import React, { Component } from 'react';
import Timeline from './components/timeline.js'
import {events} from './data.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Timeline</h2>
        <Timeline events={events}/>
      </div>
    );
  }
}

export default App;
