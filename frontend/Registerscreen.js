import React from 'react';

export default class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Username: '',
      PhoneNumber: '',
      Password: '',
      PasswordRepeat: ''
    }
  }

    register(){
      this.props.socket.emit('register', {
          Username: this.state.Username,
          PhoneNumber: this.state.PhoneNumber,
          Password: this.state.Password,
          PasswordRepeat: this.state.PasswordRepeat,
        });
      if (this.state.Username && this.state.PhoneNumber && this.state.Password && this.state.PasswordRepeat) {
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
      <div>
        <button onClick={() => this.props.redirect(0)}>Home</button>
        <button onClick={() => this.props.redirect(1)}>About Crypto</button>
        <button onClick={() => this.props.redirect(2)}>How To Start</button>
        <button onClick={() => this.props.redirect(3)}>Trading Techniques</button>
        <button onClick={() => this.props.redirect(4)}>Trading Tools</button>
        <button onClick={() => this.props.redirect(5)}>FAQ</button>
      </div>
      <div>
        <h1>Register</h1>
        <div className="form-group">
          <label>Username: </label>
          <input type="text"
            name="Username"
            className="form-control"
            value={this.state.Username}
            onChange={(e)=>this.setState({Username: e.target.value})}/>
          </div>
          <div className="form-group">
            <label>Phone Number: </label>
            <input type="text"
              name="Username"
              className="form-control"
              value={this.state.PhoneNumber}
              onChange={(e)=>this.setState({PhoneNumber: e.target.value})}/>
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
              <label>Verify Password: </label>
              <input type="Password"
                name="PasswordRepeat"
                className="form-control"
                value={this.state.PasswordRepeat}
                onChange={(e)=>this.setState({PasswordRepeat: e.target.value})}/>
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
              </div>
              );
            }
          }
