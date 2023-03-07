import { curried } from 'create-curried'

export const delete_ = curried(Set.prototype.delete)
	.takes(0)
	.takesThis()
	.generate<
		<T>(value: T) =>
			(set: Set<T>) =>
				boolean
	>()
