import React from 'react';

export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  login() {
    this.props.socket.emit('login', {
      username: this.state.username,
      password: this.state.password
    });
  }

  componentDidMount() {
    var self = this;
    this.props.socket.on('loginSuccess', function(user){
      self.props.changeUser(user);
      self.props.goToTools(user._id);
      console.log(self.props.account, self.props.loggedin)
    });
  }

  render() {
    
    return (
      <div>
          <h1>Login</h1>
          <div className="form-group">
            <label>Username: </label>
            <input type="text"
              name="username"
              className="form-control"
              value={this.state.username}
              onChange={(e)=>this.setState({username: e.target.value})}/>
            </div>
            <div className="form-group">
              <label>Password: </label>
              <input type="password"
                name="password"
                className="form-control"
                value={this.state.password}
                onChange={(e)=>this.setState({password: e.target.value})}/>
              </div>
          <div className="form-group">
            <button className="btn btn-success" onClick={() => this.login()}>Login</button>
            <button className="btn btn-primary" onClick={() => this.props.goToRegister()}>Register</button>
          </div>
      </div>
    );
  }
}
