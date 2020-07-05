import React, {useEffect, useState, useContext} from 'react'

import SectionWarmUp from './SectionWarmUp'
import SectionWod from './SectionWod'
import SectionChallenge from './SectionChallenge'
import NoWOD from './NoWOD'
import {DateContext} from '../providers/DateProvider'


const SectionGlobal = () => {

  const date = useContext(DateContext);
  const [today, setToday] = useState(new Date().toDateString());
  const [numbDate, setNumbDate] = useState();

  // useEffect( () => {
  //   var nDate = date;
  //   setNumbDate(new Date(nDate));
  //   console.log(numbDate);
  // }, [date]);

  {
    date !== null ?
    console.log(new Date(parseInt(date)).toDateString())
    :
    console.log('test')
  }

  console.log(today)




  const renderSection = () => {
    return(
      <>
        <SectionWarmUp></SectionWarmUp>
        <SectionWod></SectionWod>
        <SectionChallenge></SectionChallenge>
      </>

    )
  }

  return (
    <>
    { today === new Date(parseInt(date)).toDateString()
      ?
        renderSection()
      :
      <NoWOD></NoWOD>
    }
    </>
  )
}

export default SectionGlobal;
