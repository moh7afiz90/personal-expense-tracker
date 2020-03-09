import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'

import {
  Typography,
  Divider,
  Grid,
  Button,
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput
} from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save'
import DescriptionIcon from '@material-ui/icons/Description'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '25px',
    '& .MuiTextField-root': {
      margin: theme.spacing(5),
      width: 400
    }
  },
  grid: {
    flexGrow: 5
  },
  margin: {
    margin: theme.spacing(1)
  }
}))

export const AddTransaction = () => {
  const classes = useStyles()

  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)

  const { addTransaction } = useContext(GlobalContext)

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Typography variant="h4">Add Transactions</Typography>
      <Grid container className={classes.grid}>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">Text</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              // value={values.amount}
              // onChange={handleChange('amount')}
              startAdornment={
                <InputAdornment position="start">
                  <DescriptionIcon></DescriptionIcon>
                </InputAdornment>
              }
              labelWidth={60}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              // value={values.amount}
              // onChange={handleChange('amount')}
              startAdornment={
                <InputAdornment position="start">
                  <AttachMoneyIcon></AttachMoneyIcon>
                </InputAdornment>
              }
              labelWidth={60}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            className={classes.margin}
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
    // <div>
    //   <h1>AddTransaction</h1>
    // </div>
  )
}
