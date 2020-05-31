import React, {useEffect, useState, useContext} from 'react'

import styled from 'styled-components'
import {pxToRem, media} from '../themes/helpers'

import TitleSection from '../themes/TitleSection'
import ExoCard from './ExoCard'
import {DateContext} from '../providers/DateProvider'

//firebase
import firebaseApp from '../base'

const SectionWarmUp = ({className}) => {

const [dataExo, setDataExo] = useState({})

const date = useContext(DateContext)

useEffect(() => {
  const dateString = new Date(date);
  firebaseApp.database()
    .ref(`WODS/${dateString}/Challenge`)
    .on('value', function(snapshot){
    const state = snapshot.val();
    setDataExo(state)
  })
}, [date]);


  return(
    <div className={className}>
      <TitleSection>Challenge</TitleSection>
        { dataExo ?
          <ExoCard
            key = {dataExo.name}
            name={dataExo.name}
            source={dataExo.image}>
          </ExoCard>

          : 'Loading'
        }

    </div>
  )
}



export default styled(SectionWarmUp)`
display : inline-flex;
flex-direction : column;
padding : ${pxToRem(10)};
align-items : center;

${media.small`
  padding : ${pxToRem(50)};
`};
`
