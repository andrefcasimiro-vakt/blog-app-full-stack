import React from 'react'
import { Field } from '../form.types'
import { Controller } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';

interface Props {
  field: Field,
  register: (ref: Element | null) => void,
  errors: any,
  control: any,
}

const useStyles = makeStyles({
  grid: {
    flexWrap: 'nowrap',
  },
  input: {
    position: 'relative',
  },
  helperText: {
    position: 'absolute',
    marginTop: '3rem'
  }
});

function GenericField({ field, register, control, errors }: Props) {
  const classes = useStyles()

  const firstLetter = field.label?.charAt(0).toUpperCase()
  const formattedLabel = `${firstLetter}${field.label?.slice(1)}`
  
  // @ts-ignore
  const errorMessage = errors[field.name]?.message

  // Base Input
  const TextInput = <TextField
    id="standard-basic"
    className={classes.input}
    variant="standard"
    label={formattedLabel}
    inputProps={field}
    error={!!errorMessage}
    helperText={errorMessage}
    FormHelperTextProps={{ classes: { root: classes.helperText } }} // <- smth like that
  />

  const { icon: Icon } = field
  const Input = Icon
    ?  (
      <Grid className={classes.grid} container spacing={1} alignItems="flex-end" justify="center">
        <Grid item>
          <Icon />
        </Grid>
        <Grid item>
          {TextInput}
        </Grid>
      </Grid>
    )
    : TextInput

  return (
    <Controller
      as={Input}
      name={field.name || ""}
      control={control}
    />
  )
}

export default GenericField
