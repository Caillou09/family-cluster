import React, {useEffect, useState, useContext} from 'react'
import {DateContext} from '../providers/DateProvider';
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
  const date = useContext(DateContext)

  useEffect(() => {
    const dateString = new Date(date);
    firebaseApp.database()
      .ref(`WODS/${dateString}/Principal/Exos`)
      .on('value', function(snapshot){
      const state = snapshot.val();
      setDataExos(state)
    })
  }, [date]);


  return(
    <div className={className}>
      <TitleSection>WOD</TitleSection>
      <InfoWod></InfoWod>
      <ListeExos>
        { dataExos ?
          Object.keys(dataExos).map(exos => {
            return(
              <ExoCard
                key = {dataExos[exos].name}
                name={dataExos[exos].name}
                source={dataExos[exos].image}>
              </ExoCard>
              )
            })
            : 'Loading'
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
