import { Mutation } from 'core/graphql/graphql.types'
import { FloatingButtonProps } from 'shared/buttons/button.action.create'

export interface CreateProps<MutationData> {
	mutation: Mutation<MutationData>

	addButton: FloatingButtonProps
}
