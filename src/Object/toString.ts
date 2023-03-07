import { curried } from 'create-curried'

export const toString = curried(Object.prototype.toString)
	.takesThis()
	.generate<
		(object: object) => string
	>()
