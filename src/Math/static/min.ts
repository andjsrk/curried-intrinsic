import { curried } from 'create-curried'

export const min = curried(Math.min, 0)
	.takesRest()
	.generate<
		(values: Array<number>) => number
	>()
