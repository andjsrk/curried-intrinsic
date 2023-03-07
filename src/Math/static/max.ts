import { curried } from 'create-curried'

export const max = curried(Math.max, 0)
	.takesRest()
	.generate<
		(values: Array<number>) => number
	>()
