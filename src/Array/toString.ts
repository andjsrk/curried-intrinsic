import { curried } from 'create-curried'

export const toString = curried(Array.prototype.toString)
	.takesThis()
	.generate<
		(array: ReadonlyArray<unknown>) => string
	>()
