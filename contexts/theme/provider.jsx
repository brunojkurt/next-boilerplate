import { ThemeProvider, StylesProvider } from '@material-ui/styles'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import theme from 'theme'

const CustomThemeProvider = ({ children }) => (
  <ThemeProvider theme={{ ...theme, methods, currentTheme }}>
    <StylesProvider injectFirst>
      <StyledComponentsThemeProvider theme={theme}>
        {children}
      </StyledComponentsThemeProvider>
    </StylesProvider>
  </ThemeProvider>
)

export default CustomThemeProvider
