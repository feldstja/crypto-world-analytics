import React from 'react';

export default class Tradingtechniques extends React.Component {

  render() {
    return (
        <div>
          <div>
          <button onClick={() => this.props.redirect(0)}>Home</button>
          <button onClick={() => this.props.redirect(1)}>About Crypto</button>
          <button onClick={() => this.props.redirect(2)}>How To Start</button>
          <button onClick={() => this.props.redirect(3)}>Trading Techniques</button>
          <button onClick={() => this.props.redirect(4)}>Trading Tools</button>
          <button onClick={() => this.props.redirect(5)}>FAQ</button>
        </div>
        <h1> I bet your ass really wanted some techniques lmao </h1>
      </div>
      )
    }
  }