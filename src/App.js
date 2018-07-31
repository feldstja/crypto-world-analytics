import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      arr: []
    }
  }

  componentDidMount(){
    const intervalID = setInterval(() => {
      // fetch('https://api.hitbtc.com/api/2/public/ticker', {
      //   mode: 'cors'
      //   method: 'GET',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   }
      // })
      // .then((resp)=>{
      //   this.setState({
      //     arr: resp
      //   })
      // })
      // .catch((err)=>console.log("ERROR:", err))
      axios("http://localhost:3000/currency", {
        method: 'GET'
      })
      // .then((res)=>res.json())
      .then((resp)=>{
        console.log(resp.data)
          this.setState({
            arr: resp.data
          })
      }).catch(function(err) {
        console.log('ERROR:', err)
      });
  }, 5000)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {this.state.arr.map((m)=><li>{m.symbol}: {m.volume}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
