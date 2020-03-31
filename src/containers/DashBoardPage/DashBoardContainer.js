import React, {useEffect} from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import { Wrapper, ListDiv, DataDiv } from './elements';
import { requestUserList } from '../../actions/UserAction';
import { isAuthenticated } from '../../commons/Authenticator'
import { Link, useHistory } from 'react-router-dom';


const DashBoard = (props) => {
  const history = useHistory();
  useEffect(() => {
    !props.users.length && props.dispatch(requestUserList());
  }, [])

  useEffect(() => {
    !isAuthenticated() && history.push('login');
  })
  const getUserTemplate = (props) => {
    return props.users.map((user) => {
      return (
          <ListDiv key={user.id}>
              <Link to={`users/${user.id}`}>
                  <DataDiv>{user.name}</DataDiv>
                  <DataDiv>{user.email}</DataDiv>
                  <DataDiv>{user.phone}</DataDiv>   
              </Link>     
          </ListDiv>
      )
    });
  }

  console.log(props.users);
  return (
    <>
      <Header/>
      <Wrapper>
        { getUserTemplate(props) }
      </Wrapper>
    </>
  );
}
function mapStateToProps(state) {
  return { 
    users : state.UserReducer.users
  }
}
function mapDispatchToProps(dispatch) {
  return { dispatch };
}
export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
