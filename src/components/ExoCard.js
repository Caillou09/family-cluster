import React from 'react'

import styled from 'styled-components';
import {colors, pxToRem, media} from '../themes/helpers'


const ExoCard  = ({name, className, source}) => {
  return (
    <div className={className}>
    <img src={source} alt='loading...'></img>
    <p>{name}</p>
    </div>
  )
}

export default styled(ExoCard)`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  display : flex;
  flex-direction : column;
  flex-wrap : wrap;
  margin-top : 10px;
  width : min-content;


  img{
    width : ${pxToRem(120)};
  }

  p{
    font-size : ${pxToRem(14)};
    color : ${colors.grey};
    text-align : center;
    font-family : 'Molengo';
  }

  ${media.small`
  img {
    width : ${pxToRem(150)};
  }
  `};
`
