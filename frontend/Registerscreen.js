import React from 'react';

export default class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      PhoneNumber: '',
      password: '',
      passwordRepeat: ''
    }
  }

    register(){
      this.props.socket.emit('register', {
          username: this.state.username,
          PhoneNumber: this.state.PhoneNumber,
          password: this.state.password,
          passwordRepeat: this.state.passwordRepeat,
        });
      if (this.state.username && this.state.PhoneNumber && this.state.password && this.state.passwordRepeat) {
        this.props.goToLogin();
      }
    }

    componentDidMount() {
      var self = this;
      this.props.socket.on('registerSuccess', function(data){
      self.props.goToLogin();
    });
  }

  render() {
    return (
      <div>
        <h1>Register</h1>
        <div className="form-group">
          <label>Username: </label>
          <input type="text"
            name="username"
            className="form-control"
            value={this.state.username}
            onChange={(e)=>this.setState({username: e.target.value})}/>
          </div>
          <div className="form-group">
            <label>Phone Number: </label>
            <input type="text"
              name="username"
              className="form-control"
              value={this.state.PhoneNumber}
              onChange={(e)=>this.setState({PhoneNumber: e.target.value})}/>
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
              <label>Verify Password: </label>
              <input type="password"
                name="passwordRepeat"
                className="form-control"
                value={this.state.passwordRepeat}
                onChange={(e)=>this.setState({passwordRepeat: e.target.value})}/>
              </div>
              <div className="form-group">
                <button
                  className="btn btn-success"
                  onClick={() => this.register()}> Register </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => this.props.goToLogin()}> Login </button>
                  </div>
                </div>
              );
            }
          }
