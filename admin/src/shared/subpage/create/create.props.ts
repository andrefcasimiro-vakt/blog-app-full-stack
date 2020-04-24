import { Mutation } from 'core/graphql/graphql.types'
import { FloatingButtonProps } from 'shared/buttons/float/buttons.float.add'

export interface CreateProps<MutationData> {
	mutation: Mutation<MutationData>

	addButton: FloatingButtonProps
}
