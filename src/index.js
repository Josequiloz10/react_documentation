import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const user = {
    firstName : 'Jose',
    lastName : 'Quilarque',
    avatar : 'La leyenda de aang'
};


function getName(user){
    return  `${user.firstName} ${user.lastName}`
}

function getGreeting(user){
 if(user){
     return  <h1>Hello {getName(user)}</h1>
 }

 return <h1>Hello Stranger</h1>
}

const name = 'Jose';
const element = <div>{getGreeting(user)} </div>
const container = document.getElementById('root');
// reactDOM.render(_QUE_,_DONDE);


ReactDOM.render(element, container);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
