import React from 'react'

import styled from 'styled-components'
import {pxToRem, colors, media} from './helpers'

const ButtonStyledNoLink = ({className, text, onClick}) => {
  return (
    <div className={className}>
      <button onClick={onClick}>{text}</button>
    </div>
  )
}

export default styled(ButtonStyledNoLink)`

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
