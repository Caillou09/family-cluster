import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Connexion from './components/Connexion';
import CreateWod from './components/CreateWod';
import Title from './themes/Title';
import NotFound from './components/NotFound';
import GlobalStyle from './themes/GlobalStyle'
import * as serviceWorker from './serviceWorker';
import UserProvider from './providers/UserProvider'
import DateProvider from './providers/DateProvider'
import CreateExo from './components/CreateExo'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

function Root() {

  const [modalIsOpen, setModalIsOpen] = useState(false)

  return(
    <BrowserRouter>
      <GlobalStyle/>
      <DateProvider>
      <UserProvider>
        <Title openModal={() => setModalIsOpen(true)}>WOD of the day</Title>
        <CreateExo
          modalIsOpen={modalIsOpen}
          closeModal={() => setModalIsOpen(false)}></CreateExo>
        <Switch>
          <Route exact path='/' component={App}/>
          <Route exact path='/connexion' component={Connexion}></Route>
          <Route exact path='/createWod' component={CreateWod}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </UserProvider>
      </DateProvider>
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
