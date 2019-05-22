import React from 'react'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import routes from '../routes'
import ConfigureStore from '../store/ConfigureStore'

export const store = ConfigureStore();

function App() {
   return (
      <Provider store={store}> 
        <Router routes={routes} history={browserHistory} ></Router>
      </Provider>
   )
}
export default App;