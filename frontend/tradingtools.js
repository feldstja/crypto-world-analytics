import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Register from './Registerscreen';
import Login from './Loginscreen';

export default class Tools extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      history: [],
      arr: [],
      array: [],
      search: '',
      sorting: 'AlphaUp',
      personalHistory: [],
      personal: [],
      personalIndex: [],
      sortingPersonal: 'AlphaUp',
      personalsearch: '',
      option: '',
    }
  }

  currencyAdded(obj) {
    alert(`You're now tracking ${obj.symbol}.`)
    this.props.socket.emit('add', obj.symbol);
  }

async componentWillMount(){
  var self = this
  console.log("PROPS.USER:", this.props)

  await self.setState({
    perosonalIndex: self.props.user.FocusedCurrencies
  })
    for(var i = 0; i < this.state.personalIndex.length; i++){
        var self = this;
      self.setState({
        personal: self.state.personal.concat(array[self.state.personalIndex[i]]),
        personalHistory: self.state.personalHistory.concat([self.state.history[0][self.state.personalIndex[i]]])
      })
    }
  }

  // currencyRemoved(obj) {
  //   alert(`You're no longer tracking ${obj.symbol}.`)
  //   this.props.socket.emit('remove', [obj])
  // }

  componentDidMount(){
    var self = this
    this.props.socket.on('loginSuccess', function(user){
      self.setState({
        personalIndex: user.FocusedCurrencies
      })
    })
    console.log("PROPS.USER:", this.props.user)
    this.props.socket.emit('getCoins', this.props.user);

    // this.props.socket.on('usersCoins', function(data){
    //   console.log('hey there userCoins')
    //   console.log(data)
    //   self.setState({
    //     personalIndex: data
    //   })
    // })
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
      var personalArr = [];
      var self = this
      if(self.state.personalIndex){
      for(var i = 0; i < self.state.personalIndex.length; i++){
        for(var j = 0; j < self.state.arr.length; j++){
          if(self.state.arr[j].symbol === self.state.personalIndex[i]){
            personalArr.push({symbol: self.state.arr[j].symbol, currVolume: self.state.arr[j].volume, ogVolume: self.state.history[0][j].volume})
          }
        }
      }
    }
      // self.setState({
      //   personal: self.state.personal.slice(self.state.personal.length)
      // })
      self.setState({
        personal: personalArr
      })

    }, 1000)


    this.props.socket.on('additionSuccess', function(data){
      self.setState({
        personalIndex: data
      })

      console.log(self.state.personal)
    })

  }

  // this.props.socket.on('removalSuccess', function(data){
  //   this.setState({
  //     personal: this.state.personal.splice(data, 1)
  //   })
  // })
  // }

  render() {
    let array = this.state.arr.map((m, i)=> ({
      symbol: m.symbol,
      currVolume: m.volume,
      ogVolume: this.state.history[0][i].volume,
    }))
    array = array.sort((a, b)=> (b.currVolume-b.ogVolume)/(b.ogVolume) - (a.currVolume-a.ogVolume)/(a.ogVolume))
    array = array.filter((a) => !isNaN(a.currVolume/a.ogVolume))

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

    //Personalized currencies:

    // let personal = this.state.personal.map((m, i)=> ({
    //   symbol: m.symbol,
    //   currVolume: m.volume,
    //   ogVolume: this.state.personalHistory[0][i].volume,
    // }))
    let personal2 = this.state.personal
    personal2 = personal2.sort((a, b)=> (b.currVolume-b.ogVolume)/(b.ogVolume) - (a.currVolume-a.ogVolume)/(a.ogVolume))
    personal2 = personal2.filter((a) => !isNaN(a.currVolume/a.ogVolume))

    if (this.state.personalsearch.length) {
      personal2 = personal2.filter((a)=> a.symbol.toLowerCase().indexOf(this.state.personalsearch.toLowerCase()) !== -1)
    }
    if (this.state.sortingPersonal === 'AlphaUp') {
      personal2 = personal2.sort(function(a,b) {return (a.symbol > b.symbol) ? 1 : ((b.symbol > a.symbol) ? -1 : 0);} )
    }
    if (this.state.sortingPersonal === 'AlphaDown') {
      personal2 = personal2.sort(function(a,b) {return (a.symbol > b.symbol) ? -1 : ((b.symbol > a.symbol) ? 1 : 0);} )
    }
    if (this.state.sortingPersonal === 'VolumeUp'){
      personal2 = personal2.sort(function(a,b) {return (Number(a.currVolume) > Number(b.currVolume)) ? -1 : ((Number(b.currVolume) > Number(a.currVolume)) ? 1 : 0);} )
    }
    if (this.state.sortingPersonal === 'VolumeDown'){
      personal2 = personal2.sort(function(a,b) {return (Number(a.currVolume) > Number(b.currVolume)) ? 1 : ((Number(b.currVolume) > Number(a.currVolume)) ? -1 : 0);} )
    }
    if (this.state.sortingPersonal === 'changeVolUp'){
      personal2 = personal2.sort((a, b)=> (b.currVolume-b.ogVolume)/(b.ogVolume) - (a.currVolume-a.ogVolume)/(a.ogVolume))
    }
    if (this.state.sortingPersonal === 'changeVolDown'){
      personal2 = personal2.sort((b, a)=> (b.currVolume-b.ogVolume)/(b.ogVolume) - (a.currVolume-a.ogVolume)/(a.ogVolume))
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
        <div>
          <button onClick={() => this.props.redirect(0)}>Home</button>
          <button onClick={() => this.props.redirect(1)}>About Crypto</button>
          <button onClick={() => this.props.redirect(2)}>How To Start</button>
          <button onClick={() => this.props.redirect(3)}>Trading Techniques</button>
          <button onClick={() => this.props.redirect(4)}>Trading Tools</button>
          <button onClick={() => this.props.redirect(5)}>FAQ</button>
        </div>
        { (this.props.account && this.props.loggedin) ?
          <div className="currencydisplay">
            <div className="container">
              <p> {array.length} total currencies. </p>
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
              <div>
        <button onClick={()=>this.setState({option: 'BTC'})}>BTC</button>
        <button onClick={()=>this.setState({option: 'ETH'})}>ETH</button>
        <button onClick={()=>this.setState({option: 'USD'})}>USD</button>
        <button onClick={()=>this.setState({option: ''})}>All</button>
          </div>
              <input type='text' className='filter' onChange={(e)=> this.setState({search: e.target.value})} placeholder='Search' />
              {array.map((obj, i)=>
                <div className="thing" key={obj.symbol}>
                  <div className='info'>
                    <div className='symbol'>{obj.symbol}:
                    </div> Current Volume: {obj.currVolume}
                  </div>
                  <div className='otherThing'> Change in volume in past 24 hours: %{(((obj.currVolume-obj.ogVolume)/(obj.ogVolume))* 100).toFixed(3)}
                </div>
                <button key={i} onClick={()=>this.currencyAdded(obj)}>Add To Personalized View</button>
              </div> )}
            </div>
            <div className="personalcontainer">
              <p>You are personally tracking {personal2.length} currencies that match your query. </p>
              <div className='sorting'>
                <div>Alphabetical
                  <button onClick={()=>this.setState({sortingPersonal: 'AlphaUp'})}>^</button>
                  <button onClick={()=>this.setState({sortingPersonal: 'AlphaDown'})}>v</button>
                </div>
                <div>Current Volume
                  <button onClick={()=>this.setState({sortingPersonal: 'VolumeUp'})}>^</button>
                  <button onClick={()=>this.setState({sortingPersonal: 'VolumeDown'})}>v</button>
                </div>
                <div>Change in Volume
                  <button onClick={()=>this.setState({sortingPersonal: 'changeVolUp'})}>^</button>
                  <button onClick={()=>this.setState({sortingPersonal: 'changeVolDown'})}>v</button>
                </div>
              </div>
              <br />
              <div>
        <button onClick={()=>this.setState({option: 'BTC'})}>BTC</button>
        <button onClick={()=>this.setState({option: 'ETH'})}>ETH</button>
        <button onClick={()=>this.setState({option: 'USD'})}>USD</button>
        <button onClick={()=>this.setState({option: ''})}>All</button>
      </div>
              <input type='text' className='filter' onChange={(e)=> this.setState({personalsearch: e.target.value})} placeholder='Search' />
              {personal2.map((obj)=>
                <div className="thing" key={obj.symbol}>
                  <div className='info'>
                    <div className='symbol'>{obj.symbol}:
                    </div> Current Volume: {obj.currVolume}
                  </div>
                  <div className='otherThing'> Change in volume in past 24 hours: %{(((obj.currVolume-obj.ogVolume)/(obj.ogVolume))* 100).toFixed(3)}
                </div>
                <button onClick={()=>this.currencyRemoved(obj)}>Remove</button>
              </div> )}
            </div>
          </div>
          : (this.props.account) ? <Login socket={this.props.socket}
            goToTools={this.props.goToTools}
            goToRegister={this.props.goToRegister}
            account={this.props.account}
            loggedin={this.props.loggedin}
            changeUser={this.props.changeUser}
          /> : <Register goToLogin={this.props.goToLogin} socket={this.props.socket}/>
        }
      </div>
    );
  }
}

// export default Tools;
