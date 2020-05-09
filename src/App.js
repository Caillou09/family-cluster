import React from 'react';
import Title from './themes/Title'
import styled from 'styled-components'
import './App.css';

import SectionWarmUp from './components/SectionWarmUp'
import SectionWod from './components/SectionWod'
import GlobalStyle from './themes/GlobalStyle'
import SectionChallenge from './components/SectionChallenge'
import MainContent from './themes/mainContent'


function App() {



  return (
    <>
      <GlobalStyle/>      
      <MainContent>
        <SectionWarmUp/>
        <SectionWod/>
        <SectionChallenge/>
      </MainContent>


    </>
  );
}

export default App;
