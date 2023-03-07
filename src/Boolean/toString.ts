import { curried } from 'create-curried'

export const toString = curried(Boolean.prototype.toString)
	.takesThis()
	.generate<
		(boolean: boolean) => string
	>()
