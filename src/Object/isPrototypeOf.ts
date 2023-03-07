import { curried } from 'create-curried'

export const isPrototypeOf = curried(Object.prototype.isPrototypeOf)
	.takes(0)
	.takesThis()
	.generate<
		(object: object) =>
			(prototype: object) =>
				boolean
	>()
