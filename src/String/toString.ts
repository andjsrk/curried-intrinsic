import { curried } from 'create-curried'

export const toString = curried(String.prototype.toString)
	.takesThis()
	.generate<
		(string: string) => string
	>()
