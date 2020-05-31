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
  const dateString = new Date(date);
  firebaseApp.database()
    .ref(`WODS/${dateString}/Principal`)
    .on('value', function(snapshot) {
      const state = snapshot.val();
      setData(state)
    })
}, [date]);

if (data !== null && data !== {}) {
  temps = data.infoWu ? data.infoWu.temps : 'loading';
  tours = data.infoWu ? data.infoWu.tours : 'loading';
  recup = data.infoWu ? data.infoWu.recup : 'loading';
  pause = data.infoWu ? data.infoWu.break : 'loading';
  total = data.Exos ? Object.keys(data.Exos).length*temps*tours*pause*recup/60 : 'loading';

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
