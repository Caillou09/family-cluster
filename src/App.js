import React from 'react';
import Title from './themes/Title'
import styled from 'styled-components'
import './App.css';

import SectionGlobal from './components/SectionGlobal'

import GlobalStyle from './themes/GlobalStyle'

import MainContent from './themes/mainContent'


function App() {



  return (
    <>
      <MainContent>
        <SectionGlobal/>
      </MainContent>


    </>
  );
}

export default App;
