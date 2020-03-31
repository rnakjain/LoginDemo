import React from 'react';
import { connect } from 'react-redux';
import { deleteAuthToken } from '../../actions/AuthTokenAction'
import { Nav, Ancor } from './elements';

const Header = (props) => {
    const handleLogout = () => {
        props.dispatch( deleteAuthToken() )
      }
    return (
        <Nav>
            <Ancor onClick = {handleLogout} href="#home">Logout</Ancor>
        </Nav>
    );
}
  
  function mapDispatchToProps(dispatch) {
    return { dispatch };
  }
export default connect(null, mapDispatchToProps)(Header);