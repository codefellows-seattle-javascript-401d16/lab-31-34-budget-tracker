import React from 'react';
import ReactDom from 'react-dom';
import App from './component/app';
import './style/main.scss';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyCFid8pGuLl6QCeXoWV7SAZODty4sk0h_0',
  authDomain: 'budget-tracker-full-crud.firebaseapp.com',
  databaseURL: 'https://budget-tracker-full-crud.firebaseio.com',
  projectId: 'budget-tracker-full-crud',
  storageBucket: 'budget-tracker-full-crud.appspot.com',
  messagingSenderId: '86622657458',
};
firebase.initializeApp(config);


ReactDom.render(<App />, document.getElementById('root'));
