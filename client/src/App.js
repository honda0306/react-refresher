import React, { Component } from 'react';
import Container from './components/Container';
import logo from './logo.svg';
import './App.css';

// uncomment Avengers in App to return arrary of Avengers
// import Avengers from './components/Avengers'; 

class App extends Component {
  constructor() {
    super();
    this.state = {
      chars: [],
      prevData: [],
      nextData: [],
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people/");
  }

  getCharacters = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          chars: data.results,
          prevData: data.previous,
          nextData: data.next,
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  handlePrevData = () => {
    if (this.getCharacters(this.state.prevData)) {
      this.setState({
        chars: this.state.prevData,
      });
    }
  }

  handleNextData = () => {
    if (this.getCharacters(this.state.nextData)) {
      this.setState({
        chars: this.state.nextData,
      });
    }
  };

  render() {
    return (
      <div className="App">
        {/* <Avengers /> */}
        <h1 className="Header">React Wars</h1>
        <Container characters={this.state.chars} />
        <button onClick={this.handlePrevData}>Previous page</button>
        <button onClick={this.handleNextData}>Next page</button>
      </div>
    );
  }
}


export default App;
