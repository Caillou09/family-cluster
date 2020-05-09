import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Connexion from './components/Connexion';
import Title from './themes/Title';
import NotFound from './components/NotFound';
import GlobalStyle from './themes/GlobalStyle'
import * as serviceWorker from './serviceWorker';

import {BrowserRouter, Route, Switch} from 'react-router-dom'

function Root() {
  return(
    <BrowserRouter>
      <GlobalStyle/>
      <Title>WOD of the day</Title>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route exact path='/connexion' component={Connexion}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  )

}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
