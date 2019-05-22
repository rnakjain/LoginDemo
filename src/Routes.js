import React from 'react';
import { Route, IndexRoute } from 'react-router';
import LoginPage from './containers/LoginContainer';
import Dashboard from './containers/DashBoardContainer.js'
import { LoginAuthenticator, DasbBoardAuthenticator } from './commons/Authenticator.js'
console.log("process.env.NODE_ENV=====>>>",process.env.NODE_ENV);

export default (
		<Route path="/" >
			<IndexRoute component={ LoginPage } onEnter={ LoginAuthenticator }/>
			<Route path='login' component={ LoginPage } onEnter={ LoginAuthenticator }/>
			<Route path="dashboard" component={ Dashboard } onEnter={ DasbBoardAuthenticator }/>
			<Route path="*" component={ LoginPage } onEnter={ LoginAuthenticator }/>
		</Route>
);