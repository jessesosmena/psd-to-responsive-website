import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import reducers from './reducers'
import reduxThunk from 'redux-thunk'
//import 'normalize.css'; // Note this
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStoreWithMiddleware(reducers)
import App from './components/App'
//import './include/bootstrap'
import $ from 'jquery'

ReactDOM.render (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.querySelector('.main')
)
