import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import { isAuthenticated } from '../../commons/Authenticator'
import { requestUser, userResponse, userRemove } from '../../actions/UserAction';
import Header from '../DashBoardPage/Header';
import UserDetails from './UserDetails';
import { AncorLeft, Wrapper } from '../DashBoardPage/elements';
import { UserNav } from './elements';

const UserContainer = (props) => {
    useEffect(() => {
        !isAuthenticated() && history.push('login');
    })
    useEffect(() => {
      const user = props.selectedUser ? props.selectedUser : props.users.find((user) => user.id == props.match.params.id);
      if (!user) {
        props.dispatch(requestUser(props.match.params.id));
      } else if (user && !props.selectedUser) {
        props.dispatch(userResponse(user));
      }
      return (() => props.dispatch(userRemove()))
    }, []);
    useEffect(() => {
        
    }, [props.selectedUser])
    return (
        <>
            <Header/>
            <Wrapper>
                {props.selectedUser && <UserDetails user={props.selectedUser}/>}
                <UserNav>
                    <AncorLeft onClick = {()=> {}} href="#home">Post</AncorLeft>
                    <AncorLeft onClick = {()=> {}} href="#home">Photo Album</AncorLeft>
                </UserNav>
            </Wrapper>
            
        </>
    )
}

function mapStateToProps(state) {
    return { 
        users : state.UserReducer.users,
        selectedUser : state.UserReducer.selectedUser,
    }
}
function mapDispatchToProps(dispatch) {
    return { dispatch };
}
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)