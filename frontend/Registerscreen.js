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
      <div className="allButtons">
        <button className="homebutton" onClick={() => this.props.redirect(0)}>Home</button>
        <button className="aboutbutton" onClick={() => this.props.redirect(1)}>About Crypto</button>
        <button className="startbutton" onClick={() => this.props.redirect(2)}>How To Start</button>
        <button className="techniquesbutton" onClick={() => this.props.redirect(3)}>Trading Techniques</button>
        <button className="toolsbutton" style={{backgroundColor: 'black', color: 'white'}} onClick={() => this.props.redirect(4)}>Trading Tools</button>
        <button className="faqbutton" onClick={() => this.props.redirect(5)}>FAQ</button>
      </div>
      <div className="signform">
        <h1 className="signup">Sign Up For Free</h1>
        <div className="form-group">
          <input type="text"
            name="Username"
            className="form-control"
            value={this.state.Username}
            onChange={(e)=>this.setState({Username: e.target.value})}
            placeholder="Username"
          />
          </div>
          <div className="form-group">
            <input type="text"
              name="Username"
              className="form-control"
              value={this.state.PhoneNumber}
              onChange={(e)=>this.setState({PhoneNumber: e.target.value})}
              placeholder="Phone Number"
            />
            </div>
          <div className="form-group">
            <input type="Password"
              name="Password"
              className="form-control"
              value={this.state.Password}
              onChange={(e)=>this.setState({Password: e.target.value})}
              placeholder="Password"
            />
            </div>
            <div className="form-group">
              <input type="Password"
                name="PasswordRepeat"
                className="form-control"
                value={this.state.PasswordRepeat}
                onChange={(e)=>this.setState({PasswordRepeat: e.target.value})}
                placeholder="Verify Password"
              />
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
