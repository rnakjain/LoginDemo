import axios from 'axios'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
axios.defaults.headers.post[ 'Content-Type' ] 	= 'application/json';

export const post = ( url , jsonPayload ) => {
    return axios.post( url , jsonPayload ).then( response => response.data ).catch( error => { throw error } );
}
export const get = ( url ) => {
    return axios.get( url ).then( response => response.data ).catch( error => { throw error } );
}