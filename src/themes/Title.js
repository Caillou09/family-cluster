
import styled from 'styled-components';
import {colors, pxToRem} from './helpers';
import ButtonStyled from './ButtonStyled'

import React from 'react'

const Title  = ({className, children}) => {
  return (
    <div className={className}>
      <h1>{children}</h1>
      <ButtonStyled url='/connexion' text='Connexion'/>
    </div>
  )
}

export default styled(Title)`
display : flex;
background : ${colors.primary};
align-items : center;


  h1 {
    font-size : ${pxToRem(64)};
    color : ${colors.white};
    text-align : center;
    font-family : 'Molengo';
    background : ${colors.primary};
    margin : auto;
    width : auto;
  }
`
