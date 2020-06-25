import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import memorySave from './utils/memorySave'
import locastoreageSave from './utils/locastoreageSave'


const userInfo = locastoreageSave.getUser();
memorySave.userInfo=userInfo;


ReactDOM.render(<App />, document.getElementById('root'));

