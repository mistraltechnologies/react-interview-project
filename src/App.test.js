import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./store/reducer";
import thunk from "redux-thunk";

it('renders without crashing', () => {
  const store = createStore(
      rootReducer,
      applyMiddleware(thunk));

  const div = document.createElement('div');
  ReactDOM.render(<App store={store}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
