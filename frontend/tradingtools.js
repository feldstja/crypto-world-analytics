import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Register from './Registerscreen';
import Login from './Loginscreen';
import { Button, ButtonGroup, DropdownButton, MenuItem, Modal, PageHeader, FormGroup, FormControl } from 'react-bootstrap';
// import { Modal } from 'react-bootstrap-modal';

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
      //option is for organizing the currencies by their conversion (ETH, BTC, USD)
      option: '',
      personalOption: '',
      user: '',
      show: false,
      obj: '',
      risingCoins: [],
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

  currencyRemoved(obj) {
    var thing = obj
    alert(`You're no longer tracking ${thing}.`)
    this.props.socket.emit('remove', obj)
  }

  handleShow(obj) {
    console.log('handleShow obj', obj);
    this.setState({
      show: true,
      obj: obj.symbol
    })
  }

  handleHide(obj) {
    console.log('handleHide obj', obj)
    this.setState({
      show: false,
      obj: ''
    })
  }

  componentDidMount(){
    console.log('this.state.obj', this.state.obj)

    var self = this;

    this.props.socket.on('loginSuccess', function(user){
      console.log('success')
      localStorage.setItem("user", JSON.stringify(user));
      self.setState({
        personalIndex: user.FocusedCurrencies,
        user: user,
      })
      self.props.goToTools(user._id)
    });
    var user = JSON.parse(localStorage.getItem("user") || 'null')
      if (user) {
      this.props.socket.emit('login', user)
    }
    // this.props.socket.emit('getCoins', this.props.user);

    // this.props.socket.on('usersCoins', function(data){
    //   console.log('hey there userCoins')
    //   console.log(data)
    //   self.setState({
    //     personalIndex: data
    //   })
    // })
    const intervalID = setInterval(() => {
      axios("/ethtobtc", {
        method: 'GET'
      })
      .then((resp)=>{
        this.setState({
          ethToBtc: resp.data
        })
      })
      axios("/btctodai", {
        method: 'GET'
      })
      .then((resp)=>{
        this.setState({
          daiToBtc: (1 / resp.data)
        })
      })
      axios("/btctoeurs", {
        method: 'GET'
      })
      .then((resp)=>{
        this.setState({
          eursToBtc: (1 / resp.data)
        })
      })
      axios("/btctousd", {
        method: 'GET'
      })
      .then((resp)=>{
        this.setState({
          usdToBtc: (1 / resp.data)
        })
      })

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
      axios("/currency", {
        method: 'GET'
      })
      // .then((res)=>res.json())
      .then((resp)=>{
        var data = resp.data.sort((a, b)=> a.symbol > b.symbol)
        for(var i = 0; i < data.length; i++){
          if(data[i].symbol.substr(data[i].symbol.length - 3) === 'ETH'){
            data[i].volumeQuote = data[i].volumeQuote * this.state.ethToBtc
          } else if(data[i].symbol.substr(data[i].symbol.length - 3)=== 'USD' ||
            data[i].symbol.substr(data[i].symbol.length - 4)=== 'USDT'){
              data[i].volumeQuote = data[i].volumeQuote * this.state.usdToBtc
          } else if(data[i].symbol.substr(data[i].symbol.length - 3) === 'DAI'){
            data[i].volumeQuote = data[i].volumeQuote * this.state.daiToBtc
          } else if(data[i].symbol.substr(data[i].symbol.length - 4) === 'EURS'){
            data[i].volumeQuote = data[i].volumeQuote * this.state.eursToBtc
          }
        }        //console.log(resp.data)
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
            personalArr.push({symbol: self.state.arr[j].symbol, currVolume: self.state.arr[j].volumeQuote, ogVolume: self.state.history[0][j].volumeQuote})
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

    this.props.socket.on('removalSuccess', function(data){
      var jonSucks = self.state.personalIndex.slice();
      jonSucks.splice(data, 1)
      self.setState({
        personalIndex: jonSucks,
        show: false,
        obj: '',
      })
    })
  }

  coinRaiser(obj){
    for(var i = 0; i < this.state.risingCoins.length; i++){
      if(this.state.risingCoins[i].symbol === obj.symbol){
        return;
      }
    }
      console.log(obj.symbol, "has doubled in volume in the past hour")
      this.setState({
        risingCoins: this.state.risingCoins.concat(obj)
      })
      var self = this;
      setTimeout(()=>{self.setState({
        risingCoins: this.state.risingCoins.slice(1)
      })}, 3600000)
      // setTimeout(
      //   this.setState({
      //     risingCoins: this.state.risingCoins.slice(1)
      //   }), 10000)
    }



  render() {
    let array = this.state.arr.map((m, i)=> ({
      symbol: m.symbol,
      currVolume: m.volumeQuote,
      ogVolume: this.state.history[0][i].volumeQuote,
    }))
    array = array.sort((a, b)=> (b.currVolume-b.ogVolume)/(b.ogVolume) - (a.currVolume-a.ogVolume)/(a.ogVolume))
    array = array.filter((a) => !isNaN(a.currVolume/a.ogVolume))
    array = array.filter((a) => a.ogVolume !== 0)
    array = array.filter((a) => a.currVolume > .005)

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
    if (this.state.personalOption === 'BTC'){
      personal2 = personal2.filter((b)=>b.symbol.substr((b.symbol.length - 3), b.symbol.length) === ('BTC'))
    }
    if (this.state.personalOption === 'ETH'){
      personal2 = personal2.filter((b)=>b.symbol.substr((b.symbol.length - 3), b.symbol.length) === ('ETH'))
    }
    if (this.state.personalOption === 'USD'){
      personal2 = personal2.filter((b)=>b.symbol.substr((b.symbol.length - 3), b.symbol.length) === ('USD'))
    }

    return (
      <div className="App">
        {
          (this.props.account && this.props.loggedin) ?
          <div>
          <div className="allButtons">
            <button className="homebutton" onClick={() => this.props.redirect(0)}>Home</button>
            <button className="aboutbutton" onClick={() => this.props.redirect(1)}>About Crypto</button>
            <button className="startbutton" onClick={() => this.props.redirect(2)}>How To Start</button>
            <button className="techniquesbutton" onClick={() => this.props.redirect(3)}>Trading Techniques</button>
            <button className="toolsbutton" style={{backgroundColor: 'black', color: 'white'}} onClick={() => this.props.redirect(4)}>Trading Tools</button>
            <button className="faqbutton" onClick={() => this.props.redirect(5)}>FAQ</button>
            <button className="faqbutton" onClick={() => this.props.signout()}>Log Out</button>
          </div>
          <h1>Welcome, {this.state.user.Username}</h1>
          <br />
          <div className="currencydisplay">
            <div className="container">
              <div>
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
        </div>
              <input type='text' className='filter' onChange={(e)=> this.setState({search: e.target.value})} placeholder='Search' />
              <div className='theInfo'>
              {array.map((obj, i)=>
                <div className="thing" key={obj.symbol}>
                  <div className='info'>
                    {((((obj.currVolume-obj.ogVolume)/(obj.ogVolume))* 100) > 100) ? this.coinRaiser(obj) : null}
                    <div className='symbol'>{obj.symbol}:
                    </div> Current Volume: {obj.currVolume}
                  </div>
                  <div className={(obj.currVolume - obj.ogVolume > 0) ? 'positive' : (obj.currVolume - obj.ogVolume === 0) ? 'otherThing' : 'negative'}> Change in volume in past 24 hours: %{(((obj.currVolume-obj.ogVolume)/(obj.ogVolume))* 100).toFixed(3)}
                </div>
                <button key={i} onClick={()=>this.currencyAdded(obj)}>Add To Personalized View</button>
              </div> )}
            </div>
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
        <button onClick={()=>this.setState({personalOption: 'BTC'})}>BTC</button>
        <button onClick={()=>this.setState({personalOption: 'ETH'})}>ETH</button>
        <button onClick={()=>this.setState({personalOption: 'USD'})}>USD</button>
        <button onClick={()=>this.setState({personalOption: ''})}>All</button>
      </div>
              <input type='text' className='filter' onChange={(e)=> this.setState({personalsearch: e.target.value})} placeholder='Search' />
              <div className='theInfo'>
              {personal2.map((obj)=>
                <div className="thing" key={obj.symbol}>
                  <div className='info'>
                    <div className='symbol'>{obj.symbol}:
                    </div> Current Volume: {obj.currVolume}
                  </div>
                  <div className={(obj.currVolume - obj.ogVolume > 0) ? 'positive' : (obj.currVolume - obj.ogVolume === 0) ? 'otherThing' : 'negative'}> Change in volume in past 24 hours: %{(((obj.currVolume-obj.ogVolume)/(obj.ogVolume))* 100).toFixed(3)}
                </div>
                <button onClick={() => this.handleShow(obj)}>View</button>
              </div> )}
            </div>
              <div className="static-modal">
                <Modal show={this.state.show} obj={this.state.obj} onHide={() => this.handleHide(obj)}>
                  <Modal.Header>
                     <Modal.Title> You are viewing {this.state.obj} </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <form>
                      <FormGroup controlId="formBasicText">
                        <h4>Get notified by text:</h4>
                        <FormControl
                          type="date"
                        />
                        <FormControl
                          type="time"
                        />
                          </FormGroup>
                          <Button onClick={()=>this.setState({show: false, obj: ''})}>Close</Button>
                          <Button onClick={()=>this.currencyRemoved(this.state.obj)}>Remove</Button>
                          <Button>Set</Button>
                           {/* make the set button close the modal, and set a timer to text you do some shit   */}
                        </form>
                      </Modal.Body>
                </Modal>
              </div>
            </div>
          </div>
          </div>
          : (this.props.account) ? <Login socket={this.props.socket}
            goToTools={this.props.goToTools}
            goToRegister={this.props.goToRegister}
            redirect={this.props.redirect}
            account={this.props.account}
            loggedin={this.props.loggedin}
            changeUser={this.props.changeUser}
          /> : <Register
            redirect={this.props.redirect}
            goToLogin={this.props.goToLogin}
            socket={this.props.socket}/>
        }
      </div>
    );
  }
}


// export default Tools;
