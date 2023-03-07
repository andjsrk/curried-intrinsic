import { curried } from 'create-curried'

export const hypot = curried(Math.hypot, 0)
	.takesRest()
	.generate<
		(values: Array<number>) => number
	>()
