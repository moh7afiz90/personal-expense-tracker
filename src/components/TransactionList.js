import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, List, Typography } from '@material-ui/core'

import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: theme.spacing(4, 0, 2)
  }
}))

export const TransactionList = () => {
  const classes = useStyles()
  const { transactions } = useContext(GlobalContext)
  const [dense] = React.useState(false)
  

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" className={classes.title}>
            Transactions List
          </Typography>
          <div className={classes.demo}>
            <List dense={dense}>
              {transactions.map(transaction => {
                return (
                  <Transaction
                    key={transaction.id}
                    transaction={transaction}
                  ></Transaction>
                )
              })}
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
