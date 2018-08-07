import React from 'react';
import axios from 'axios';

export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      Username: '',
      Password: '',
      user: ''
    }
  }

  login() {
    this.props.socket.emit('login', {
      Username: this.state.Username,
      Password: this.state.Password
    });
  }

  componentDidMount() {
    var self = this
    this.props.socket.on('loginSuccess', function(user){
      self.setState({
        user: user
      })
      self.props.changeUser(user);
      self.props.goToTools(user._id);
    });
  }

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
      <div>
          <h1>Login</h1>
          <div className="form-group">
            <label>Username: </label>
            <input type="text"
              name="Username"
              className="form-control"
              value={this.state.Username}
              onChange={(e)=>this.setState({Username: e.target.value})}/>
            </div>
            <div className="form-group">
              <label>Password: </label>
              <input type="Password"
                name="Password"
                className="form-control"
                value={this.state.Password}
                onChange={(e)=>this.setState({Password: e.target.value})}/>
              </div>
          <div className="form-group">
            <button className="btn btn-success" onClick={() => this.login()}>Login</button>
            <button className="btn btn-primary" onClick={() => this.props.goToRegister()}>Register</button>
          </div>
      </div>
    </div>
    );
  }
}
