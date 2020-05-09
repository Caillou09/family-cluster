import React, {useEffect, useState} from 'react'

import styled from 'styled-components';
import {colors, pxToRem} from '../themes/helpers'

import firebaseApp from '../base'

const InfoWarmUp = ({className, total}) => {

const [data, setData] = useState({})

useEffect( () => {
  firebaseApp.database()
    .ref('WOD/Warm-up')
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
      <p>
        {data.temps} sec/exo<br/>
        {data.tours} tours<br/>
      <b>Total : {total} min</b> <br/>
      </p>
    </div>
  )
}

export default styled(InfoWarmUp)`
color : ${colors.grey};
display : flex;
flex direction : column;
justify-content : space-evenly;

`
