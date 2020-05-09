import React from 'react'
import ButtonStyled from '../themes/ButtonStyled'
import GlobalStyle from '../themes/GlobalStyle'

import styled from 'styled-components'

import {colors, pxToRem} from '../themes/helpers'

const NotFound = ({className}) => {
  return (
    <>
    <GlobalStyle/>
    <div className={className}>
      <h5>Fuck Burpees !!</h5>
      <p>
        Y'a rien à cette adresse...<br/>
        Peut-être que c'est le programme du WOD qui t'inquiètes ?<br/>
      </p>
      <ButtonStyled url='/' text='Revenir au Wod'/>
    </div>
    </>
  )
}

export default styled(NotFound)`
  display : flex;
  flex-direction : column;
  text-align : center;
  width : ${pxToRem(400)};
  margin: auto;
  align-content : flex-start;
  padding : ${pxToRem(20)};
  margin-top : ${pxToRem(50)};


  h5 {
    color : ${colors.white};
    background : ${colors.primary};
    font-size : ${pxToRem(35)};
    text-align : center;
    margin : auto auto ${pxToRem(30)} auto;
  }
`
