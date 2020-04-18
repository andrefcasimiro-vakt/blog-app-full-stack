import React from 'react'
import { useForm } from 'react-hook-form'
import GenericField from './generic-field/generic-field.component'
import { Form as FormType } from './form.types'
import {
  Form as StyledForm,
} from './form.styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import makeStyles from '@material-ui/core/styles/makeStyles'

interface Props {
  form: FormType,
  schema?: unknown,
}


const useStyles = makeStyles({
  fields: {
    margin: '1rem',
  },
  field: {
    marginBottom: '2rem',
  },
});


function Form<D, T>({ form, schema }: Props) {
  const classes = useStyles()

  const {
    register,
    handleSubmit,
    watch,
    control,
    errors,
  } = useForm<D>({
    validationSchema: schema,
    mode: 'onChange',
  })


  const onSubmit = (data: D) => {
    console.log('data--', data)
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      {form.fields.map((formRow, i) => (
        <Grid className={classes.fields} key={i} container spacing={2}>
          {formRow.map((formField, j) => (
            <Grid className={classes.field} key={j} item xs={12} md={6}>
              <GenericField
                field={formField}
                register={register}
                errors={errors}
                control={control}
              />
            </Grid>
          ))}
        </Grid>
      ))}
      <Grid container justify="flex-end">
        <Button variant="text" color="secondary" type="submit">
          {form.submitName}
        </Button>
      </Grid>
    </StyledForm>
  )
}

export default Form
