import { curried } from 'create-curried'

export const fromCodePoint = curried(String.fromCodePoint, 0)
	.takesRest()
	.generate<
		(codePoints: Array<number>) => string
	>()
