import React from 'react'
import styled from 'styled-components'
import TitleSection from '../themes/TitleSection';
import {pxToRem} from '../themes/helpers'

const NoWOd = ({className}) => {
  return (
    <div className={className}>
      <TitleSection>NO WOD Today</TitleSection>
    </div>
  )
}

export default styled(NoWOd)`
padding-top: ${pxToRem(100)};
`
