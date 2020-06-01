import React, {useEffect, useState, useContext} from 'react'
import {DateContext} from '../providers/DateProvider';
import styled from 'styled-components'
import {pxToRem, media} from '../themes/helpers'

import TitleSection from '../themes/TitleSection'
import InfoWarmUp from './InfoWarmUp'
import ListeExos from '../themes/ListeExos'
import ExoCard from './ExoCard'

//firebase
import firebaseApp from '../base'

const SectionWarmUp = ({className}) => {

const [dataExo, setDataExo] = useState({})

const date = useContext(DateContext)

useEffect(() => {
  firebaseApp.database()
    .ref(`WODS/${date}/Warm-up/Exos`)
    .on('value', function(snapshot){
    const state = snapshot.val();
    setDataExo(state)
  })
}, [date]);


  return(
    <div className={className}>
      <TitleSection>Warm-up</TitleSection>
      <InfoWarmUp></InfoWarmUp>
      <ListeExos>
        { dataExo ?
          Object.keys(dataExo).map(exos => {
            return(
              <ExoCard
                key = {dataExo[exos].name}
                name={dataExo[exos].name}
                source={dataExo[exos].image}>
              </ExoCard>
              )
            })
            : 'Loading'
          }
      </ListeExos>
    </div>
  )
}



export default styled(SectionWarmUp)`
  display : inline-flex;
  flex-direction : column;
  padding : ${pxToRem(10)};

  ${media.small`
    padding : ${pxToRem(50)};
  `};
`
