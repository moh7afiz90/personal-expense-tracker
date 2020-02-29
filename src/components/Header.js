import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import HighlightIcon from '@material-ui/icons/Highlight'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import {
  AppBar,
  Switch,
  FormControlLabel,
  Toolbar,
  Grid
} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

export default function Header(props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Personal Spending Tracking
          </Typography>
          <FormControlLabel
            control={
              <Grid component="label" container alignItems="center" spacing={1}>
                <Grid item>
                  <HighlightIcon />
                </Grid>
                <Grid item>
                  <Switch onClick={props.toggleDarkMode} />
                </Grid>
                <Grid>
                  <Brightness4Icon />
                </Grid>
              </Grid>
            }
          />
        </Toolbar>
      </AppBar>
    </div>
  )
}
