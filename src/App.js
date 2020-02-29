import React, { useState } from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { Grid, Container, CssBaseline } from '@material-ui/core'
import Header from './components/Header'
import { Balance } from './components/Balance'
import { IncomeExpenses } from './components/IncomeExpenses'
import { TransactionList } from './components/TransactionList'
import { AddTransaction } from './components/AddTransaction'

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
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Balance></Balance>
          </Grid>
          <Grid item xs={8}>
            <IncomeExpenses></IncomeExpenses>
            <TransactionList></TransactionList>
            <AddTransaction></AddTransaction>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

export default App
