import { curried } from 'create-curried'

export const clear = curried(Map.prototype.clear)
	.takesThis()
	.generate<
		(map: Map<unknown, unknown>) => void
	>()
