import React from 'react'

import {
  Box,
  Grid,
  Card,
  Typography,
  Button,
  makeStyles
} from '@material-ui/core'

import DeleteIcon from '@material-ui/icons/Delete'

const useStyles = makeStyles(() => ({
  plus: {
    borderColor: '#008000	',
    margin: '5px'
  },
  minus: {
    borderColor: '#8B0000',
    margin: '5px'
  }
}))

export const Transaction = ({ transaction }) => {
  const classes = useStyles()
  const sign = transaction.amount < 0 ? '-' : '+'
  return (
    <Grid item xs={6} sm={6} md={6}>
      <Card
        className={transaction.amount < 0 ? classes.minus : classes.plus}
        variant="outlined"
      >
        <Box display="flex" p={1}>
          <Box p={1} flexGrow={1} m={1}>
            <Typography
              className={classes.title}
              color="textPrimary"
              gutterBottom
            >
              {transaction.text}
            </Typography>
          </Box>
          <Box p={1} m={1}>
            <Typography className={classes.pos} color="textSecondary">
              Cost: {`$ ${sign} ${Math.abs(transaction.amount)}`}
            </Typography>
          </Box>
          <Box p={1} className={classes.pos}>
            <Button size="large">
              <DeleteIcon />
            </Button>
          </Box>
        </Box>
      </Card>
    </Grid>
  )
}
