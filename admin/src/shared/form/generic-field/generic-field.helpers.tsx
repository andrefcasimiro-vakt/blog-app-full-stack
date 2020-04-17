import React from 'react'
import TextField from '@material-ui/core/TextField';
import { Field } from '../form.types';

/**
 * Returns an appropriate input component based on the given input type
 */
export const getInputBasedOnType = (props: Field): JSX.Element => {
  const firstLetter = props.name?.charAt(0).toUpperCase()
  const label = `${firstLetter}${props.name?.slice(1)}`

  return <TextField id="standard-basic" variant="standard" label={label} />
}
