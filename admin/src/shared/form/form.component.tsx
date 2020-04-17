import React from 'react'
import { useForm } from 'react-hook-form'
import GenericField from './generic-field/generic-field.component'
import { Form as FormType } from './form.types'
import {
  Form as StyledForm,
  FormRow,
  FormField,
  SubmitWrapper,
} from './form.styles'
import Button from '@material-ui/core/Button'

interface Props {
  form: FormType,
}

function Form<D, T>({ form }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    errors,
  } = useForm<D>()


  const onSubmit = (data: D) => {
    console.log('data--', data)
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      {form.fields.map((formRow, i) => (
        <FormRow key={i}>
          {formRow.map((formField, j) => (
            <FormField>
              <GenericField field={formField} register={register} />
            </FormField>
          ))}
        </FormRow>
      ))}
      <SubmitWrapper>
        <Button variant="text" color="secondary" type="submit">
          {form.submitName}
        </Button>
      </SubmitWrapper>
    </StyledForm>
  )
}

export default Form
