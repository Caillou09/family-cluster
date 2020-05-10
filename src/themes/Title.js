
import styled from 'styled-components';
import {colors, pxToRem, media} from './helpers';
import ButtonStyled from './ButtonStyled';
import {Link} from 'react-router-dom';

import React from 'react'

const Title  = ({className, children}) => {
  return (
    <div className={className}>
      <h1><Link style={{textDecoration:'none', color:'white'}} to='/'>{children}</Link></h1>
      <ButtonStyled url='/connexion' text='Login'/>
    </div>
  )
}

export default styled(Title)`
display : flex;
background : ${colors.primary};
align-items : center;
flex-direction : column;
padding : ${pxToRem(5)};

${media.small`
  flex-direction : row;
`};

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
