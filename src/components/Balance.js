import React, { useContext } from 'react'

import { Card, CardContent, Typography, makeStyles } from '@material-ui/core'

import { GlobalContext } from '../context/GlobalState'

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  pos: {
    fontSize: 16,
    marginTop: 10
  }
})

export const Balance = () => {
  const classes = useStyles()
  const { transactions } = useContext(GlobalContext)
  // const amounts = transactions.amount
  const amounts = transactions.map(transaction => transaction.amount)
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h5">
          Your Balance
        </Typography>
        <Typography
          // component="h5"
          variant="h1"
          className={classes.pos}
          color="textSecondary"
        >
          $ {total}
        </Typography>
      </CardContent>
    </Card>
  )
}
