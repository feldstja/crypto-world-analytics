import React from 'react';
import Login from './Loginscreen';
import Register from './Registerscreen';
import Tools from './tradingtools';
const io = require('socket.io-client');
import Faq from './FAQ';
import Tradingtechniques from './Tradingtechniques';
import HowToStart from './HowToStart';
import AboutCrypto from './Aboutscreen'


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 0,
      loggedin: '',
      account: false,
      socket: io('http://localhost:3000'),
      user: {}
    };
  }

redirect(page){
    this.setState({
      screen: page
    })
  }
  changeUser(user){
    this.setState({
      user: user
    })
  }

  render() {
    console.log(this.state.screen)
    return (
      <div>
        <div className="App">
        <header className="App-header">
          <h1 className="App-title">Crypto World Analytics</h1>
        </header>
        </div>
        { (this.state.screen !== 0) ?
          (this.state.screen !== 1) ?
          (this.state.screen !== 2) ?
          (this.state.screen !== 3) ?
          (this.state.screen !== 4) ?
          (this.state.screen !== 5) ? null
          : <Faq redirect={this.redirect.bind(this)}/>
          : <Tools socket={this.state.socket}
            loggedin={this.state.loggedin}
            account={this.state.account}
            goToTools={(userId)=>this.setState({loggedin: userId})}
            goToLogin={()=>this.setState({account: true})}
            redirect={this.redirect.bind(this)}
            changeUser={this.changeUser.bind(this)}
            user={this.state.user}
            goToRegister={()=>this.setState({account: false})}/>
          : <Tradingtechniques redirect={this.redirect.bind(this)}/>
          : <HowToStart redirect={this.redirect.bind(this)}/>
          : <AboutCrypto redirect={this.redirect.bind(this)}/>
          : <div>
            <div>
            <button onClick={() => this.setState({screen: 0})}>Home</button>
            <button onClick={() => this.setState({screen: 1})}>About Crypto</button>
            <button onClick={() => this.setState({screen: 2})}>How To Start</button>
            <button onClick={() => this.setState({screen: 3})}>Trading Techniques</button>
            <button onClick={() => this.setState({screen: 4})}>Trading Tools</button>
            <button onClick={() => this.setState({screen: 5})}>FAQ</button>
          </div>
          <h1>Home screen</h1>
          {/* other home stuff goes right in here */}
          </div>
        }
        </div>
      );
    }
  }
