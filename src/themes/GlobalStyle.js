import { createGlobalStyle } from 'styled-components'
import {colors} from './helpers'


const Global = createGlobalStyle`
/* molengo-regular - latin */
@font-face {
  font-family: 'Molengo';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/molengo-v10-latin-regular.eot'); /* IE9 Compat Modes */
  src: local('Molengo'), local('Molengo-Regular'),
       url('../fonts/molengo-v10-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/molengo-v10-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/molengo-v10-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('../fonts/molengo-v10-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/molengo-v10-latin-regular.svg#Molengo') format('svg'); /* Legacy iOS */
}

::selection {
  background : ${colors.primary};
  color : ${colors.white}
}


`;



export default Global
