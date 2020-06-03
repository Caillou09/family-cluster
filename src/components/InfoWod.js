import React, {useEffect, useState, useContext} from 'react'
import {DateContext} from '../providers/DateProvider';
import styled from 'styled-components';
import {colors, pxToRem} from '../themes/helpers'

import firebaseApp from '../base'

const InfoWod = ({
  className,
  total,
  tours,
  temps,
  recup,
  pause}) => {

const [data, setData] = useState({})

const date = useContext(DateContext)


useEffect( () => {

  firebaseApp.database()
    .ref(`WODS/${date}/Principal`)
    .on('value', function(snapshot) {
      const state = snapshot.val();
      setData(state)
    })
}, [date]);



  temps = ((data || {}).infoWu || {}).temps;
  tours = ((data || {}).infoWu || {}).tours;
  recup = ((data || {}).infoWu || {}).recup;
  pause = ((data || {}).infoWu || {}).break;

if (data && data.Exos) {
  const totalNum = Object.keys(data.Exos).length*temps*tours/60;
  total = totalNum.toFixed(2);
}


  return (
    <div className={className}>
      <p style={{margin : '0'}}>
        {temps} sec/exo<br/>
        {tours} tours<br/>
      <b>Total : {total} min</b> <br/>
      </p>
      <p>
        {recup} sec entre les tours<br/>
        {pause} sec entre les exos
      </p>
    </div>
  )
}

export default styled(InfoWod)`
  color : ${colors.grey};
  display : flex;
  flex-flow : row wrap;
  justify-content : space-evenly;
  width : auto;
`
