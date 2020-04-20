import React from 'react'
import { useSnackbar } from 'notistack';
import { Paper, makeStyles } from '@material-ui/core'
import BaseForm from 'shared/form/form.component'
import { Form as FormType } from 'shared/form/form.types'
import { MutationTuple, MutationHookOptions } from '@apollo/react-hooks';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
  }
}))

type Props<
  FormData,
  FormSchema,
  MutationReturn,
> = {
  form: FormType,
  schema: FormSchema,
  useMutation: (
    onCompleted?: (result: MutationReturn) => unknown,
  ) => MutationTuple<MutationReturn, FormData>,

  onSuccess?: (result: MutationReturn) => unknown,

  /** If set, displays a snackbar notification upon a successfull mutation response */
  successMessage?: string,
}

/**
 * Generic abstraction for integrating graphql mutations
 * with react-hook form
 * 
 * Also handles snackbar notifications for success and error graphql events
 */
function Form<
  FormData, // Comes from extracting the schema, must match variables used in graphql mutation
  FormSchema,
  MutationReturn,
>({
  form,
  schema,
  useMutation,
  successMessage,
}: Props<FormData, FormSchema, MutationReturn>) {
  const [mutate, { data, error }] = useMutation()
  const { enqueueSnackbar } = useSnackbar()

  const classes = useStyles();

  const handleSubmit = (formData: FormData) => {
    mutate({ variables: formData })
  }

  if (error) {
    enqueueSnackbar(error.message, { variant: 'error' })
  }

  if (data && successMessage) {
    enqueueSnackbar(successMessage, { variant: 'success' })
  }
  
  return (
    <Paper className={classes.paper}>
      <BaseForm<FormData, FormSchema>
        form={form}
        schema={schema}
        onSubmit={handleSubmit}
      />
    </Paper>
  )
}

export default Form
