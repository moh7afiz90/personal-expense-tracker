import React, { useState } from 'react'
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles
} from '@material-ui/core/styles'
import { Grid, Container, CssBaseline } from '@material-ui/core'
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { IncomeExpenses } from './components/IncomeExpenses'
import { TransactionList } from './components/TransactionList'
import { AddTransaction } from './components/AddTransaction'

import { GlobalProvider } from './context/GlobalState'

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

const useStyles = makeStyles({
  root: {
    marginTop: '20px'
  }
})

function App() {
  const [theme, toggleDarkMode] = useDarkMode()
  const themeConfig = createMuiTheme(theme)
  const classes = useStyles()
  console.log(themeConfig)
  return (
    <GlobalProvider>
      <ThemeProvider theme={themeConfig}>
        <CssBaseline />
        <Header toggleDarkMode={toggleDarkMode}>App Component</Header>
        <Container className={classes.root}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={4}>
              <Balance></Balance>
            </Grid>
            <Grid item xs={12} md={8}>
              <IncomeExpenses></IncomeExpenses>
              <TransactionList></TransactionList>
              <AddTransaction></AddTransaction>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </GlobalProvider>
  )
}

export default App
