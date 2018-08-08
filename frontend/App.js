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
      socket: io('/'),
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
      <div className="page">
        <div className="App">
        <header className="App-header">
          <div className="title">
            <img className="logo" onClick={() => this.setState({screen: 0})} src='https://lh3.googleusercontent.com/sb-SspTiivE8sRGhtLL4n94S1saIZIsU85jMsE1M0QYdFX_ehyZU5KbCP-1RUalj0EnLHQcD1cylx0UZibWsbA44RAkR3CokHh4JDMJ4rqsRaYMUZ_lTQ-bvTV_a61_82sRmSPblEA=w2400' />
          </div>
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
            goToTools={(userId)=>this.setState({loggedin: userId, account: true})}
            signout={()=>this.setState({loggedin: ''})}
            goToLogin={()=>this.setState({account: true})}
            redirect={this.redirect.bind(this)}
            changeUser={this.changeUser.bind(this)}
            user={this.state.user}
            goToRegister={()=>this.setState({account: false})}/>
          : <Tradingtechniques redirect={this.redirect.bind(this)}/>
          : <HowToStart redirect={this.redirect.bind(this)}/>
          : <AboutCrypto redirect={this.redirect.bind(this)}/>
          : <div>
            <div className="allButtons">
            <button className="homebutton" style={{backgroundColor: 'black', color: 'white'}} onClick={() => this.redirect(0)}>Home</button>
            <button className="aboutbutton" onClick={() => this.redirect(1)}>About Crypto</button>
            <button className="startbutton" onClick={() => this.redirect(2)}>How To Start</button>
            <button className="techniquesbutton" onClick={() => this.redirect(3)}>Trading Techniques</button>
            <button className="toolsbutton" onClick={() => this.redirect(4)}>Trading Tools</button>
            <button className="faqbutton" onClick={() => this.redirect(5)}>FAQ</button>
           </div>
           <head>
                       <title>Our Company</title>
                     </head>

                     <body>

                       <h1 className="welcome">Welcome to Crypto World Analytics!</h1>

                       <h2>About</h2>
                       <p>With the growing interest in cryptocurrencies and the blockchain, there are endless amounts of information all over the internet for you to learn more about it. However, you will come to see that the information you seek is all over the place. At Crypto World Analytics, everything you need to learn about cryptocurrencies is all right here on this website. All the dirty work is done for you. Everything you need is right in front of you. The Introduction video below is a great introduction to the blockchain and cryptocurrency and is highly recommended to begin with. And remember.. the more you earn, the more you learn!</p>
                       <br></br>


                       <h2>Intro</h2>
                       <p>Watch this introductory video in order to gain a better understanding of the blockchain. If you do not fully grasp everything in this video, do not worry! This is just for you to get some context. It is helpful to comprehend how the blockchain works before you learn about crypto.</p>
                       <br></br>
                       <iframe width="560" height="315" src="https://www.youtube.com/embed/3xGLc-zz9cA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                       <br></br>

                       <h2>Site Content</h2>
                       <div className="sitecontent">
                       <p><b>About Crypto:</b></p>
                       <p>In this page you will learn about how cryptocurrency originated, why it is important, and the terminology associated with it.</p>
                       <p><b>How To Start:</b></p>
                       <p>Here, you will learn how to start investing into cryptocurrency along with some advice on beginning your journey. It is important to learn from the mistakes of others, rather than your own. It will save you a lot of time and money.</p>
                       <p><b>Trading Techniques:</b></p>
                       <p>Understanding which coins to invest in can be a difficult process when you first begin. This page will guide you through how most traders find the right coins to invest in or to avoid.</p>
                       <p><b>Trading Tools:</b></p>
                       <p>This tool will enable you to detect and be notified of large increases in volume, which often leads to a large spike in price. This will allow you to jump into a coin before the potential increase occurs.</p>
                       <p><b>FAQ:</b></p>
                       <p>You have questions, we have answers. We have displayed the most frequently asked questions that people may want to know.</p>
                       </div>


                     </body>
          </div>
        }
        </div>
      );
    }
  }
