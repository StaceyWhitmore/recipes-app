/*My starting file for my Recipes app*/
import React from 'react';
//import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import Menu from './Components/Menu'
import data from './data/recipes'//data in JSON format

//import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

window.React = React //exposes the React Library GLOBALLY in the browser.

render(
    <Menu recipes={data} />,
    document.getElementById('root')
)

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
