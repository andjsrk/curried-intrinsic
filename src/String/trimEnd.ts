import { curried } from 'create-curried'

export const trimEnd = curried(String.prototype.trimEnd)
	.takesThis()
	.generate<
		(string: string) => string
	>()
