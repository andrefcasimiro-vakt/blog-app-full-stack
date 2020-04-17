import React from 'react'
import { Field } from '../form.types'
import { getInputBasedOnType } from './generic-field.helpers'

interface Props {
  field: Field,
  register: (ref: Element | null) => void,
}


function GenericField({ field, register }: Props) {

  const Input = (props: any) => getInputBasedOnType(props)

  return (
    <Input
      {...field}
      ref={register}
    />
  )
}

export default GenericField
