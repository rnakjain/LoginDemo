import { call, put } from 'redux-saga/effects'
import cookie from 'react-cookie'
import * as Ajax  from '../xhr/xhrRequestHandler'
import { browserHistory } from 'react-router'
import { receiveAuthToken, authTokenFailed }  from '../actions/AuthTokenAction'
import { CLIENT_LOGIN_REFERENCE, DEFAULT_URL } from '../commons/Constants.js'

export function* doUserLogin( credentials )
{
	const url =	'/login';
	try
	{
		let loginResp	=	yield call( Ajax.post , url , credentials.cred );
		//Setting reference token in cookie..
		//To store token in the cookie
		cookie.save( CLIENT_LOGIN_REFERENCE , loginResp.token , { path: '/', maxAge: 3600 * 12  });
		//To store relevent info to store state.
		yield put( receiveAuthToken(loginResp) );
		//To push route to dashboard.
		browserHistory.push( DEFAULT_URL );	
	}
	catch( e )
	{
		//To push failed state to store.
		yield put( authTokenFailed( e.response.data ) )
		console.error( e );		
	}
}

export function* doUserLogout( credentials )
{
	cookie.remove( CLIENT_LOGIN_REFERENCE , { path: '/' } );
	browserHistory.push( '/' );	
}
