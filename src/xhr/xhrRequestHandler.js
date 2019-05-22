import axios from 'axios'

axios.defaults.baseURL = 'https://reqres.in/api';
axios.defaults.headers.post[ 'Content-Type' ] 	= 'application/json';

export const post = ( url , jsonPayload ) => {
    return axios.post( url , jsonPayload ).then( response => response.data ).catch( error => { throw error } );
}
