import { createStore } from 'redux';
import { combineReducers } from 'redux-immutablejs';
import { Provider } from 'react-redux';
import Immutable from 'immutable';
import React from 'react';
import ReactDOM from 'react-dom';

import reducers from 'reducers/reducers.js';

import Login from './Login.jsx';

// const reducer = combineReducers(reducers);

// TEST
// console.log('ALL REDUCERS : ', reducers)
// console.log('COMBINED : ', reducer)


const state = Immutable.fromJS({});
const store = createStore(reducers, state);
const mountNode = document.getElementById('AppContainer');

function onLoginSubmit(data){
  console.log(data)
  // store.dispatch({type:'requestLogin', data})
}

function Root(props){
  return (
    <Provider className="provider" store={store}>
      <div>
        <Login onSubmit={onLoginSubmit}/>
      </div>
    </Provider>
);
}
ReactDOM.render(<Root/>,mountNode);

