import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import { BrowserRouter } from 'react-router-dom'
import reducers from './reducers'
import App from './components/app'

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)

render((
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
