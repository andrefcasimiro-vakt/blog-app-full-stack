export interface DetailsFormProps<Data, MutationData> {
	data: Data
	dataId: number // taken from the url, since we may not ask for an id in the graphql query
	loading: boolean
	onSuccess: (result: MutationData) => void
}

export interface DetailsRenderer<Data> {
	data: Data
	loading: boolean
}
