import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Connexion from './components/Connexion';
import createWod from './components/CreateWod'
import Title from './themes/Title';
import NotFound from './components/NotFound';
import GlobalStyle from './themes/GlobalStyle'
import * as serviceWorker from './serviceWorker';
import UserProvider from './providers/UserProvider'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

function Root() {
  return(
    <BrowserRouter>
      <GlobalStyle/>
      <UserProvider>
        <Title>WOD of the day</Title>
        <Switch>
          <Route exact path='/' component={App}/>
          <Route exact path='/connexion' component={Connexion}></Route>
          <Route exact path='/createWod' component={createWod}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </UserProvider>
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
