import React, {useEffect, useState, useContext} from 'react'
import {DateContext} from '../providers/DateProvider';
import styled from 'styled-components';
import {colors, pxToRem} from '../themes/helpers'

import firebaseApp from '../base'

const InfoWarmUp = ({
  className, temps, tours, nmbrExos, total}) => {

const [data, setData] = useState({})

const date = useContext(DateContext)


useEffect( () => {
  const dateString = new Date(date);
  firebaseApp.database()
    .ref(`WODS/${dateString}/Warm-up`)
    .on('value', function(snapshot) {
      const state = snapshot.val();
      setData(state)
    })
}, [date]);

if (data !== null && data !== {}) {
  temps = data.infoWu ? data.infoWu.temps : 'loading';
  tours = data.infoWu ? data.infoWu.tours : null;
  total = data.Exos ? Object.keys(data.Exos).length*temps*tours/60 : null;
}


  return (

    <div className={className}>
      <p style={{margin : '0'}}>
        {temps} sec/exo<br/>
        {tours} tours<br/>
        <b>Total : {total} min</b> <br/>
      </p>
    </div>
  )
}

export default styled(InfoWarmUp)`
color : ${colors.grey};
display : flex;
flex direction : column wrap;
justify-content : space-evenly;
width : auto;
`
