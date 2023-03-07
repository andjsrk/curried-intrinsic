import { curried } from 'create-curried'

export const fromCharCode = curried(String.fromCharCode, 0)
	.takesRest()
	.generate<
		(charCodes: Array<number>) => string
	>()
