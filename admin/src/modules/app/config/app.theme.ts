import { createMuiTheme } from "@material-ui/core"
import { config } from "./app.config"
import * as colors from '@material-ui/core/colors';

export const getMaterialTheme = () => createMuiTheme({
  palette: {
    primary: colors[config.app.theme.pallete.primary],
    secondary: colors[config.app.theme.pallete.secondary],
  }
})

const theme = getMaterialTheme()

export const genericColors = {
  WHITE: '#fff',
  BLACK: '#000',
  GRAY: '#f5f5f5',
}

export default theme
