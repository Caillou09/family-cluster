import React from 'react'
import GlobalStyle from '../themes/GlobalStyle'

import styled from 'styled-components'
import {colors, pxToRem} from '../themes/helpers'


const Connexion = ({className}) => {

  

  return (
    <>
      <form className={className} action="">
        <input placeholder='email' type="text" required/>
        <input placeholder='mot de passe' type="text" required/>
        <button type='submit'>Connexion</button>
      </form>
    </>
  )
}

export default styled(Connexion)`
  display : flex;
  flex-direction : column;
  max-width : ${pxToRem(400)};
  margin : auto;
  margin-top : ${pxToRem(50)};
  padding : ${pxToRem(20)};
  border : 2px solid ${colors.primary};
  height : ${pxToRem(250)};
  justify-content : space-around;
  border-radius:  4px;
  box-shadow:  0px 2px 6px -1px rgba(0,0,0,.12);
  text-align : center;

  input{
    font-size:  16px;
    padding:  20px 0px;
    height:  56px;
    border:  none;
    border-bottom:  solid 1px rgba(0,0,0,.1);
    background:  #fff;
    width:  280px;
    box-sizing:  border-box;
    color : ${colors.primary};

    &:focus{
      border-bottom:  solid 1px ${colors.primary};
      outline: 0;
    }
  }
  button {
    color : ${colors.white};
    background : ${colors.primary};
    padding : ${pxToRem(10)};
    border : 2px solid ${colors.white};
    font-weight : 700;
    border-radius : 4px;
    cursor : pointer;
    margin : ${pxToRem(5)} auto;

    &:hover{
      background : ${colors.white};
      color : ${colors.primary};
      border : 2px solid ${colors.primary};
  }
  }
`
