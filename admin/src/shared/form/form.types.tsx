import { SvgIcon } from "shared/icons/icons.types"

export type Field = React.InputHTMLAttributes<unknown> & {
  icon?: SvgIcon,
  label?: string,
}

export type Form = {
  fields: Array<Array<Field>>,
  submitName: string,
}
