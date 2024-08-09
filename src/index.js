import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {createStore} from 'redux';
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const reducer=()=>(state,action)=>{
   switch(action.type){
    case"add":
    state=state+action.payload
    
      break;
    case "subtract":
      break;
 default:
  return state;


   }
   return state;

}
const store = createStore(reducer,1)
store.subscribe(()=>{
  console.log("store updated",store.getState())
})
store.dispatch({
  type:"add",
  payload:10
});