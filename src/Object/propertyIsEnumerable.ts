import { curried } from 'create-curried'

export const propertyIsEnumerable = curried(Object.prototype.propertyIsEnumerable)
	.takes(0)
	.takesThis()
	.generate<
		(key: PropertyKey) =>
			(object: object) =>
				boolean
	>()
