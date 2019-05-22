import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestAuthToken } from '../actions/AuthTokenAction'

@connect( (store) => ({ login : store.AuthTokenReducer }) )
class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
      error: '',
    };
  }

  dismissError = () => {
    this.setState({ error: '' });
  }

  isValidEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    let email    = this.state.email ? this.state.email.trim() : undefined;
    let password = this.state.password ? this.state.password.trim() : undefined;
    let isValidEmail = this.isValidEmail(email);

    if( isValidEmail && password)
      this.props.dispatch( requestAuthToken({ email, password }) ) 
    else if( !isValidEmail )
      return this.setState({ error: 'Please provide valid email' });
    else 
      return this.setState({ error: 'Please provide a password' });

    return this.setState({ error: '' });
  }

  handleEmailChange = (evt) => {
    this.setState({
      email: evt.target.value,
    });
  };

  handlePassChange = (evt) => {
    this.setState({
      password: evt.target.value,
    });
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.login.error)
      this.setState({ error : nextProps.login.error })
  }

  render() {

    let isFetching = this.props.login.isFetching;
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          {
            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          }
          <label>User Name</label>
          <input type="text" value={this.state.email} onChange={this.handleEmailChange} />

          <label>Password</label>
          <input type="password" value={this.state.password} onChange={this.handlePassChange} />

          <input type="submit" disabled={isFetching ? true: false } value={ isFetching ? "Loading..": "Log In" } data-test="submit" />
        </form>
      </div>
    );
  }
}

export default LoginPage;