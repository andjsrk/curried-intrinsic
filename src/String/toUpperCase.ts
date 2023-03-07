import { curried } from 'create-curried'

export const toUpperCase = curried(String.prototype.toUpperCase)
	.takesThis()
	.generate<
		(string: string) => string
	>()
