import { curried } from 'create-curried'

export const trimStart = curried(String.prototype.trimStart)
	.takesThis()
	.generate<
		(string: string) => string
	>()
