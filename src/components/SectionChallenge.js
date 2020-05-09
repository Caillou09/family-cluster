import React, {useEffect, useState} from 'react'

import styled from 'styled-components'
import {pxToRem} from '../themes/helpers'

import TitleSection from '../themes/TitleSection'
import ExoCard from './ExoCard'

//firebase
import firebaseApp from '../base'

const SectionWarmUp = ({className}) => {

const [dataExo, setDataExo] = useState({})

useEffect(() => {
  firebaseApp.database()
    .ref('WOD/Challenge')
    .on('value', function(snapshot){
    const state = snapshot.val();
    setDataExo(state)
  })
}, []);


  return(
    <div className={className}>
      <TitleSection>Challenge</TitleSection>
        <ExoCard
          key = {dataExo.name}
          name={dataExo.name}
          source={dataExo.image}>
        </ExoCard>
    </div>
  )
}



export default styled(SectionWarmUp)`
  display : inline-flex;
  flex-direction : column;
  padding : ${pxToRem(50)};
  align-items : center;
`
