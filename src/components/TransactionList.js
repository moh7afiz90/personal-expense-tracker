import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  IconButton,
  Avatar,
  ListItemText,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  Typography,
  Container,
  Divider
} from '@material-ui/core'

import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import PaymentIcon from '@material-ui/icons/Payment'
import DeleteIcon from '@material-ui/icons/Delete'
import { GlobalContext } from '../context/GlobalState'

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

// function generate(element) {
//   return [0, 1, 2].map(value =>
//     React.cloneElement(element, {
//       key: value
//     })
//   )
// }

export const TransactionList = () => {
  const classes = useStyles()
  const { transactions } = useContext(GlobalContext)
  const [dense, setDense] = React.useState(false)
  const [secondary, setSecondary] = React.useState(false)

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
                  <ListItem key={transaction.id}>
                    <ListItemIcon>
                      <ListItemAvatar>
                        <Avatar>
                          <PaymentIcon />
                        </Avatar>
                      </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText primary={transaction.text} />

                    <ListItemIcon>
                      <AttachMoneyIcon></AttachMoneyIcon>
                    </ListItemIcon>
                    <ListItemText primary={transaction.amount} />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="delete">
                        <Divider
                          style={{ width: '2px' }}
                          orientation="vertical"
                          absolute
                          light
                        />
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                )
              })}
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
