import { curried } from 'create-curried'

export const hasOwnProperty = curried(Object.prototype.hasOwnProperty)
	.takes(0)
	.takesThis()
	.generate<
		(key: PropertyKey) =>
			(object: object) =>
				boolean
	>()
