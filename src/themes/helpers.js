import { css } from 'styled-components'
import '../App.css'


export const colors = {
  primary: '#152D86',
  accent: '#ff4a00',
  white: '#f1f4f5',
  black: '#20272b',
  grey: '#354147',
  lightGrey: '#969ea2'
}


export const pxToRem = (px = 16) => {
  return `${px / 16}rem`
}

export const layout = (px = 1170) => {
  return `
    max-width: ${pxToRem(px)};
    margin: 0 auto;
    padding: 0 ${pxToRem(8)};`
}

const sizes = {
  large: 1200,
  medium: 900,
  small: 600
}

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}rem) {
      ${css(...args)}
    }
  `
  return acc
}, {})
