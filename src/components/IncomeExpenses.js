import React from 'react'
import {
  Grid,
  Card,
  CardContent,
  Typography,
  makeStyles
} from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  contentColor: {
    color: '#000'
  }
})

export const IncomeExpenses = props => {
  const classes = useStyles()
  return (
    <div>
      {/* <Card> */}
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Card style={{ backgroundColor: '#c8e6c9' }}>
            <CardContent>
              <Typography
                className={classes.contentColor}
                variant="h5"
                component="h5"
              >
                Income
              </Typography>
              <Typography className={classes.contentColor} component="h5">
                $ 0.00
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card style={{ backgroundColor: '#ff9e80' }}>
            <CardContent>
              <Typography
                className={classes.contentColor}
                variant="h5"
                component="h5"
              >
                Expense
              </Typography>
              <Typography component="h5" className={classes.contentColor}>
                $ 0.00
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      {/* </Card> */}
    </div>
  )
}
