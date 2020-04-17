export type Field = React.InputHTMLAttributes<unknown>

export type Form = {
  fields: Array<Array<Field>>,
  submitName: string,
}
