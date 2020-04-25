import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'
import theme from 'modules/app/app.theme'

export default createGlobalStyle`
  ${normalize()}

  *, *::after, *::before {
    box-sizing: border-box
  }

  body {
    font-family: 'Roboto';
    
    background: ${theme.palette.grey[100]};
    
    overflow-x: hidden;

  }
`
