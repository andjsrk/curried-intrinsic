import { curried } from 'create-curried'

export const toLowerCase = curried(String.prototype.toLowerCase)
	.takesThis()
	.generate<
		(string: string) => string
	>()
