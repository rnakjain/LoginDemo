
import React from 'react'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import Routes from '../Routes'
import ConfigureStore from '../store/ConfigureStore'

//To share the store with SocketConnection
export const store		=	ConfigureStore();

function App() {
   return (
      <Provider store={store}> 
        <Router history={browserHistory} routes={Routes} history={browserHistory} ></Router>
      </Provider>
   )
}
export default App;