import React from 'react'
import { useForm, DeepPartial } from 'react-hook-form'
import GenericField from './generic-field/generic-field.component'
import { Form as FormType } from './form.types'
import { Form as StyledForm } from './form.styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import makeStyles from '@material-ui/core/styles/makeStyles'
import LinearProgress from '@material-ui/core/LinearProgress/LinearProgress'
import { CircularProgress } from '@material-ui/core'
import theme from 'modules/app/config/app.theme'

interface Props<FormData, FormSchema> {
	form: FormType
	schema?: FormSchema
	onSubmit: (formData: FormData) => void
	loading?: boolean
	formData?: DeepPartial<FormData>
}

const useStyles = makeStyles({
	formContent: {
		width: '100%',
		maxWidth: '25rem',
	},
	fields: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
	field: {
		marginBottom: '2rem',
	},
})

function Form<FormData, FormSchema>({
	form,
	schema,
	onSubmit,
	loading,
	formData,
}: Props<FormData, FormSchema>) {
	const classes = useStyles()

	const {
		register,
		handleSubmit,
		getValues,
		setValue,
		control,
		errors,
	} = useForm<FormData>({
		validationSchema: schema,
		mode: 'onChange',
		defaultValues: formData,
	})

	return (
		<StyledForm>
			{loading ? (
				<CircularProgress />
			) : (
				<div className={classes.formContent}>
					{form.fields.map((formRow, i) => (
						<Grid className={classes.fields} key={i} container spacing={2}>
							{formRow.map((formField, j) => (
								<Grid className={classes.field} key={j} xs={12}>
									<GenericField
										field={formField}
										register={register}
										errors={errors}
										control={control}
										setValue={setValue}
										getValues={getValues}
									/>
								</Grid>
							))}
						</Grid>
					))}
					<Grid container justify="flex-end">
						<Button
							variant="text"
							color="secondary"
							onClick={handleSubmit(onSubmit)}
						>
							{form.submitName}
						</Button>
					</Grid>
				</div>
			)}
		</StyledForm>
	)
}

export default Form
