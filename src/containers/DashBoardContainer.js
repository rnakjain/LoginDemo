import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAuthToken } from '../commons/Authenticator';
import { deleteAuthToken } from '../actions/AuthTokenAction'
@connect( (store) => ({ login : store.AuthTokenReducer }) )
class DashBoard extends Component {

  handleLogout = () => {
    this.props.dispatch( deleteAuthToken() )
  }

  render() {
    return (
      <React.Fragment>
        { getAuthToken() }
        <br/><br/><br/>
        <button onClick={ this.handleLogout }>LOGOUT</button>
      </React.Fragment>
    );
  }
}

export default DashBoard;