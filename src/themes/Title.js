
import styled from 'styled-components';
import {colors, pxToRem, media} from './helpers';
import ButtonStyled from './ButtonStyled';
import ButtonSignOut from './ButtonSignOut';
import {Link} from 'react-router-dom';
import {UserContext} from '../providers/UserProvider'


import React, {useContext} from 'react'

const Title  = ({className, children}) => {

  const user = useContext(UserContext)

  return (
    <div className={className}>
      {user !== null  &&
        <ButtonStyled url='/createWod' text='créer WOD'/>
      }
      <h1><Link style={{textDecoration:'none', color:'white'}} to='/'>{children}</Link></h1>
        {user !== null  ?
          <ButtonSignOut></ButtonSignOut>
          :
          <ButtonStyled url='/connexion' text='connexion'/>
        }

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
