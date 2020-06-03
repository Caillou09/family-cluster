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

  useEffect( () => {
    setNumbDate(new Date(parseInt(date)).toDateString());
  }, [date]);

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
    { today === numbDate
      ?
        renderSection()
      :
      <NoWOD></NoWOD>
    }
    </>
  )
}

export default SectionGlobal;
