import React from 'react'
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core'

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

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h5">
          Your Balance
        </Typography>
        <Typography
          component="h5"
          className={classes.pos}
          color="textSecondary"
        >
          $ 0.00
        </Typography>
      </CardContent>
    </Card>
  )
}
