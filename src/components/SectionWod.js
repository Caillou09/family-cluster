import React, {useEffect, useState} from 'react'

import styled from 'styled-components'
import {pxToRem, media} from '../themes/helpers'

import TitleSection from '../themes/TitleSection'
import InfoWod from './InfoWod'
import ListeExos from '../themes/ListeExos'
import ExoCard from './ExoCard'

//firebase
import firebaseApp from '../base'

const SectionWod = ({className}) => {

  const [dataExos, setDataExos] = useState({})

  useEffect(() => {
    firebaseApp.database()
      .ref('WOD/Principal/Exos')
      .on('value', function(snapshot){
      const state = snapshot.val();
      setDataExos(state)
    })
  }, []);


  return(
    <div className={className}>
      <TitleSection>WOD</TitleSection>
      <InfoWod></InfoWod>
      <ListeExos>
        {
          Object.keys(dataExos).map(exos => {
            return(
              <ExoCard
                key = {dataExos[exos].name}
                name={dataExos[exos].name}
                source={dataExos[exos].image}>
              </ExoCard>
              )
            })
          }
      </ListeExos>
    </div>
  )
}



export default styled(SectionWod)`
display : inline-flex;
flex-direction : column;
padding : ${pxToRem(10)};

${media.small`
  padding : ${pxToRem(50)};
`};
`
