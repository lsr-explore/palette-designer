import React, { Component } from 'react';
import { SketchPicker } from 'react-color';
import logo from './logo.svg';
import './App.css';
import Element from './Element.jsx';

class App extends Component {
  state = {
    background: '#30577e',
  };

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };

  render() {
    const divStyle = {
      background: this.state.background
    }
    return (
      <div className="App">
        <div className='edit'>
          <div>
            <Element
              color={ this.state.background }
              opacity={100}
              name='primary'
            />
          </div>
          <SketchPicker 
            color={ this.state.background }
            onChangeComplete={ this.handleChangeComplete }
          />
        </div>
        <div className='preview'>
          <div className="App-header" style={divStyle}>
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
