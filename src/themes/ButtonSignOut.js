import React from 'react'

import {Link} from 'react-router-dom'

import firebaseApp from '../base'

import styled from 'styled-components'
import {pxToRem, colors, media} from './helpers'

const ButtonSignOut = ({className}) => {

  const handleClick = () => {
    firebaseApp.auth().signOut()
  }

  return (
    <div className={className}>
      <Link to={'connexion'}><button onClick={() => handleClick()}>Deconnexion</button></Link>
    </div>
  )
}

export default styled(ButtonSignOut)`

text-align :center;

button {
  color : ${colors.white};
  background : ${colors.primary};
  padding : ${pxToRem(10)};
  border : 2px solid ${colors.white};
  font-weight : 700;
  border-radius : 4px;
  cursor : pointer;
  margin : ${pxToRem(5)} auto auto auto;

}

button:hover{
  background : ${colors.white};
  color : ${colors.primary};
  border : 2px solid ${colors.primary};
}

  ${media.small`
    button{
      background : ${colors.primary};
      color : ${colors.white};

    }

    button:hover{
      background : ${colors.white};
      color : ${colors.primary};
    }

  `};
`
