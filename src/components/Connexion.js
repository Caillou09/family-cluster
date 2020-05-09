import React from 'react'
import GlobalStyle from '../themes/GlobalStyle'

import styled from 'styled-components'
import {colors, pxToRem} from '../themes/helpers'


const Connexion = (props) => {
  return (
    <>
      <GlobalStyle/>
      <form action="">
        <input placeholder='email' type="text" required/>
        <button type='submit'>Connexion</button>
      </form>
    </>
  )
}

export default Connexion
