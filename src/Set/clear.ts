import { curried } from 'create-curried'

export const clear = curried(Set.prototype.clear)
	.takesThis()
	.generate<
		(set: Set<unknown>) => void
	>()
