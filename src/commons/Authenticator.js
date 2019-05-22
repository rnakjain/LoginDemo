import cookie from 'react-cookie'
import { CLIENT_LOGIN_REFERENCE, DEFAULT_URL } from './Constants.js'

export const DasbBoardAuthenticator = (nextState, replace) => {
	  
	console.log('INSIDE Authenticator!');
	
	if( !isAuthenticated() ) 
	{
		console.info( 'nextState =>' , nextState );
		console.log('Redirect to login!');
		  replace({
		     pathname: "/login",
		     state   : { nextPathname: nextState.location.pathname, search: nextState.location.search }
		  });
	}
};

export const LoginAuthenticator = (nextState, replace) => {
	
  	console.log('INSIDE Authenticator!');
  
  	if( isAuthenticated() ) 
  	{
		replace({
			pathname: DEFAULT_URL,
			state   : { nextPathname: nextState.location.pathname, search: nextState.location.search }
		});
	}
};

export const isAuthenticated	=	() => {
	
	console.log('clr===>>' , cookie.load( CLIENT_LOGIN_REFERENCE ) );
	
	if( cookie.load( CLIENT_LOGIN_REFERENCE ) )
		return true;
	return false;
}


export const getAuthToken	=	() => {
	
	console.log('clr===>>' , cookie.load( CLIENT_LOGIN_REFERENCE ) );
	
	return cookie.load( CLIENT_LOGIN_REFERENCE );
}