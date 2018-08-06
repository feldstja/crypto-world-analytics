import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      history: [],
      arr: [],
      array: [],
      search: '',
      sorting: 'AlphaUp',
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
        var data = resp.data.sort((a, b)=> a.symbol > b.symbol)
        //console.log(resp.data)
        this.setState({
          arr: data,
          history: this.state.history.concat([data])
        })
        if(this.state.history.length > 17280){
          this.setState({
            history: this.state.history.slice(1)
          })
        }
      }).catch(function(err) {
        console.log('ERROR:', err)
      });
    }, 1000)
  }




  render() {
    let array = this.state.arr.map((m, i)=> ({
      symbol: m.symbol,
      currVolume: m.volumeQuote,
      ogVolume: this.state.history[0][i].volumeQuote,
    })).filter((a) => !isNaN(a.currVolume/a.ogVolume))//.filter((a)=>a.symbol !== 'ROXETH');

    let array2 =array.filter(()=>)
    if (this.state.search.length) {
      array = array.filter((a)=> a.symbol.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)
    }
    if (this.state.sorting === 'AlphaUp') {
      array = array.sort(function(a,b) {return (a.symbol > b.symbol) ? 1 : ((b.symbol > a.symbol) ? -1 : 0);} )
    }
    if (this.state.sorting === 'AlphaDown') {
      array = array.sort(function(a,b) {return (a.symbol > b.symbol) ? -1 : ((b.symbol > a.symbol) ? 1 : 0);} )
    }
    if (this.state.sorting === 'VolumeUp'){
      array = array.sort(function(a,b) {return (Number(a.currVolume) > Number(b.currVolume)) ? -1 : ((Number(b.currVolume) > Number(a.currVolume)) ? 1 : 0);} )
    }
    if (this.state.sorting === 'VolumeDown'){
      array = array.sort(function(a,b) {return (Number(a.currVolume) > Number(b.currVolume)) ? 1 : ((Number(b.currVolume) > Number(a.currVolume)) ? -1 : 0);} )
    }
    if (this.state.sorting === 'changeVolUp'){
      array = array.sort((a, b)=> (b.currVolume-b.ogVolume)/(b.ogVolume) - (a.currVolume-a.ogVolume)/(a.ogVolume))
    }
    if (this.state.sorting === 'changeVolDown'){
      array = array.sort((b, a)=> (b.currVolume-b.ogVolume)/(b.ogVolume) - (a.currVolume-a.ogVolume)/(a.ogVolume))
    }
    if (this.state.option === 'BTC'){
      array = array.filter((b)=>b.symbol.substr((b.symbol.length - 3), b.symbol.length) === ('BTC'))
    }
    if (this.state.option === 'ETH'){
      array = array.filter((b)=>b.symbol.substr((b.symbol.length - 3), b.symbol.length) === ('ETH'))
    }
    if (this.state.option === 'USD'){
      array = array.filter((b)=>b.symbol.substr((b.symbol.length - 3), b.symbol.length) === ('USD'))
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <button onClick={()=>this.setState({option: 'BTC'})}>BTC</button>
          <button onClick={()=>this.setState({option: 'ETH'})}>ETH</button>
          <button onClick={()=>this.setState({option: 'USD'})}>USD</button>
          <button onClick={()=>this.setState({option: ''})}>All</button>

        </div>
        <div className='sorting'>
          <div>Alphabetical
            <button onClick={()=>this.setState({sorting: 'AlphaUp'})}>^</button>
            <button onClick={()=>this.setState({sorting: 'AlphaDown'})}>v</button>
          </div>
          <div>Current Volume

              <button onClick={()=>this.setState({sorting: 'VolumeUp'})}>^</button>
              <button onClick={()=>this.setState({sorting: 'VolumeDown'})}>v</button>
            </div>
            <div>Change in Volume
              <button onClick={()=>this.setState({sorting: 'changeVolUp'})}>^</button>
              <button onClick={()=>this.setState({sorting: 'changeVolDown'})}>v</button>
            </div>
          </div>
          <br />
          <input type='text' className='filter' onChange={(e)=> this.setState({search: e.target.value})} placeholder='Filter' />

          {array.map((obj)=> <div className="thing" key={obj.symbol}><div className='info'><div className='symbol'>{obj.symbol}:</div> Current Volume: {obj.currVolume}
        </div><div className='otherThing'> Change in volume in past 24 hours: %{(((obj.currVolume-obj.ogVolume)/(obj.ogVolume))* 100).toFixed(3)}
      </div>  </div> )}

    </div>
  );
}
}

export default App;
