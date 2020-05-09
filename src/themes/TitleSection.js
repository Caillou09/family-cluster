
import styled from 'styled-components';
import {colors, pxToRem} from './helpers'

import React from 'react'

const TitleSection  = ({className, children}) => {
  return (
    <>
      <h2 className={className}>{children}</h2>
    </>
  )
}

export default styled(TitleSection)`
  font-size : ${pxToRem(34)};
  color : ${colors.primary};
  text-align : center;
  font-family : 'Molengo';
`
