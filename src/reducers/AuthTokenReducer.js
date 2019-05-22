import {TOKEN_REQUESTED, TOKEN_RESPONSE, TOKEN_FAILED, DELETE_TOKEN } from '../actions/AuthTokenAction.js'

const AuthTokenReducer		=	( state = { isFetching: false , error: "" } , action ) => {
    console.log("action",action);
    switch( action.type )
    {
        case TOKEN_REQUESTED:
            return { 
                ...state,
                isFetching		: true,
                error           : ""
            }
        case TOKEN_RESPONSE:
            return { 
                ...state,
                isFetching		: false,
                error           : ""
            }
        case TOKEN_FAILED : 
            return {
                ...state,
                isFetching		: false,
                error           : action.errorResponse.error
        }
        default:
        return state
    };
}
export default AuthTokenReducer;