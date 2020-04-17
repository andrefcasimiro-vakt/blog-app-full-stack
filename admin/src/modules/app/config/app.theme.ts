import { createMuiTheme } from "@material-ui/core"
import { config } from "./app.config"
import * as colors from '@material-ui/core/colors';

export const getMaterialTheme = (): any => createMuiTheme({
  palette: {
    primary: colors[config.app.theme.pallete.primary],
    secondary: colors[config.app.theme.pallete.secondary],
  },
  overrides: {
    MuiInput: {
      // Name of the styleSheet
      underline: {
        '&:hover:not($disabled):before': {
          backgroundColor: colors[config.app.theme.pallete.secondary][500],
          borderBottom: colors[config.app.theme.pallete.secondary][500],
          height: 1,
        },
      },
    },
  },
})

const theme = getMaterialTheme()

export const genericColors = {
  WHITE: '#fff',
  BLACK: '#000',
  GRAY: '#f5f5f5',
}

export default theme
