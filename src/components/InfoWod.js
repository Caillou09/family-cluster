import React, {useEffect, useState} from 'react'

import styled from 'styled-components';
import {colors, pxToRem} from '../themes/helpers'

import firebaseApp from '../base'

const InfoWod = ({className, total}) => {

const [data, setData] = useState({})

useEffect( () => {
  firebaseApp.database()
    .ref('WOD/Principal')
    .on('value', function(snapshot) {
      const state = snapshot.val();
      setData(state)
    })

}, []);




Object.keys(data).map( e => {
  if (typeof data[e] === 'object') {
    return (
      total = Object.keys(data[e]).length * data.temps * data.tours / 60
      )

  }
})


  return (
    <div className={className}>
      <p style={{margin : '0'}}>
        {data.temps} sec/exo<br/>
        {data.tours} tours<br/>
        <b>Total : {total} min</b> <br/>
      </p>
      <p>
        {data.recup} sec entre les tours<br/>
        {data.break} sec entre les exos
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
