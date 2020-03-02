import React, { useContext } from 'react'

import {
  Box,
  Grid,
  Card,
  Typography,
  Button,
  makeStyles
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { GlobalContext } from '../context/GlobalState'

const useStyles = makeStyles(() => ({
  plus: {
    borderColor: '#008000	',
    backgroundColor: '#d9e7d8',
    color: '#000',
    margin: '5px'
  },
  minus: {
    borderColor: '#8B0000',
    backgroundColor: '#e7d8d8',
    color: '#000',
    margin: '5px'
  }
}))

export const Transaction = ({ transaction }) => {
  const classes = useStyles()
  const sign = transaction.amount < 0 ? '-' : '+'
  const { deleteTransaction } = useContext(GlobalContext)
  return (
    <Grid item xs={6} sm={6} md={6}>
      <Card
        className={transaction.amount < 0 ? classes.minus : classes.plus}
        variant="outlined"
      >
        <Box display="flex" p={1}>
          <Box p={1} flexGrow={1} m={1}>
            {/* Color attribute should be fixed */}
            <Typography className={classes.title} color="black" gutterBottom>
              {transaction.text}
            </Typography>
          </Box>
          <Box p={1} m={1}>
            {/* Color attribute should be fixed */}
            <Typography className={classes.pos} color="black">
              Cost: {`$ ${sign} ${Math.abs(transaction.amount)}`}
            </Typography>
          </Box>
          <Box p={1} className={classes.pos}>
            <Button
              size="large"
              onClick={() => deleteTransaction(transaction.id)}
            >
              <DeleteIcon />
            </Button>
          </Box>
        </Box>
      </Card>
    </Grid>
  )
}
