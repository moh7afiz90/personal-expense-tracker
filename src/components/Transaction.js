import React from 'react'

import {
  IconButton,
  Avatar,
  ListItemText,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  Divider,
  makeStyles
} from '@material-ui/core'

import PaymentIcon from '@material-ui/icons/Payment'
import DeleteIcon from '@material-ui/icons/Delete'

const useStyles = makeStyles(() => ({
  minus: {
    color: '#FF0000'
  }
}))

export const Transaction = ({ transaction }) => {
  const classes = useStyles()
  const sign = transaction.amount < 0 ? '-' : '+'
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

      <ListItemText
        className={classes.minus}
        primary={`$ ${sign} ${Math.abs(transaction.amount)}`}
      />
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
}
