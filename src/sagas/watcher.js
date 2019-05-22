
import { takeLatest } from 'redux-saga/effects'
// import { CHAT_CONFIGURATION_REQUESTED, UPDATE_CHAT_CONFIG_REQUEST }  from '../actions/ChatConfigurationAction'
import { TOKEN_REQUESTED, DELETE_TOKEN }  from '../actions/AuthTokenAction'
import * as LoginSagas from './LoginSagas'


export function* watchUserLogin()
{
	yield takeLatest( TOKEN_REQUESTED , LoginSagas.doUserLogin );
}

export function* watchUserLogout()
{
	yield takeLatest( DELETE_TOKEN , LoginSagas.doUserLogout );
}