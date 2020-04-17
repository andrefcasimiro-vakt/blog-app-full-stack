import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'
import { genericColors } from 'modules/app/config/app.theme'

export default createGlobalStyle`
  ${normalize()}

  *, *::after, *::before {
    box-sizing: border-box
  }

  body {
    font-family: 'Roboto';
    
    background: ${genericColors.GRAY};
    
    overflow-x: hidden;

  }
`
