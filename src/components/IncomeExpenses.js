import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
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
  contentColorIncome: {
    color: '#000'
  },
  contentColorExpense: {
    color: '#000'
  }
})

export const IncomeExpenses = props => {
  const { transactions } = useContext(GlobalContext)

  const amounts = transactions.map(transaction => transaction.amount)

  // const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2)
  const classes = useStyles()
  return (
    <div>
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
                $ {income}
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
                $ {expense}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}
