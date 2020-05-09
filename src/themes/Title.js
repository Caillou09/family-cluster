
import styled from 'styled-components';
import {colors, pxToRem} from './helpers'

import React from 'react'

const Title  = ({className, children}) => {
  return (
    <>
      <h1 className={className}>{children}</h1>
    </>
  )
}

export default styled(Title)`
  font-size : ${pxToRem(64)};
  color : ${colors.white};
  text-align : center;
  font-family : 'Molengo';
  background : ${colors.primary};
  margin : auto;
  width : auto;
`
