import { curried } from 'create-curried'

export const toString = curried(RegExp.prototype.toString)
	.takesThis()
	.generate<
		(regexp: RegExp) => string
	>()
