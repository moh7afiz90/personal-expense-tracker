import React, { useState } from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { Container, Box, CssBaseline } from '@material-ui/core'
import Header from './components/Header'

const themeObject = {
  palette: {
    type: 'light',
    primary: { main: '#053f5b' },
    secondary: { main: '#5e3c6f' }
  },
  themeName: 'Blue Lagoon 2020',
  typography: {
    fontFamily: 'bitter'
  }
}

const useDarkMode = () => {
  const [theme, setTheme] = useState(themeObject)
  const {
    palette: { type }
  } = theme
  const toggleDarkMode = () => {
    const updatedTheme = {
      ...theme,
      palette: {
        ...theme.palette,
        type: type === 'light' ? 'dark' : 'light'
      }
    }
    setTheme(updatedTheme)
  }
  return [theme, toggleDarkMode]
}

function App() {
  const [theme, toggleDarkMode] = useDarkMode()
  const themeConfig = createMuiTheme(theme)
  console.log(themeConfig)
  return (
    <ThemeProvider theme={themeConfig}>
      <CssBaseline />
      <Header toggleDarkMode={toggleDarkMode}>App Component</Header>
      <Container>
        <Box my={2}>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join('\n')}
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default App
