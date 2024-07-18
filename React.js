# Lecture17-Understanding-React-Components-Cipherschools

// React components are LIKE functions.
// They contain some logical code and they return some ui.
// Just like functions, they accept arguments that can control the ui/logic of the component.
// Rendering a component is like calling a function.Like in index.js where <App/>=The whole code of component.
// In react, a component can be represented by a JS class or a JS function.


//App.js code

import logo from './logo.svg';
import './App.css';
import{Component} from "react";
class App extends Component{
  name="Venkateshwara Raju Chakrahari"
  render(){
    return(
      <>
      <div>
        <h1>Good Morning There!</h1>
        <h2>This is {this.name}.</h2>
      </div>
      <div>
        <p>This is paragraph and my name is {this.name}</p>
      </div>
      </>
    );
  }
}

export default App;


//Index.js code

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <App/>
  </React.StrictMode>
);
reportWebVitals();

