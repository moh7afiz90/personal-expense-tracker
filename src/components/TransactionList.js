import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, GridList } from '@material-ui/core'

import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction'

const useStyles = makeStyles(theme => ({
  root: {
    margin: '5px'
  },

  title: {
    margin: theme.spacing(4, 0, 2)
  }
}))

export const TransactionList = () => {
  const classes = useStyles()
  const { transactions } = useContext(GlobalContext)
  // const [dense] = React.useState(false)

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography variant="h4">Transactions List</Typography>
          <div className={classes.demo}>
            <GridList spacing={3}>
              {transactions.map(transaction => {
                return (
                  <Transaction
                    key={transaction.id}
                    transaction={transaction}
                  ></Transaction>
                )
              })}
            </GridList>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
