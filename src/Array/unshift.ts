import { curried } from 'create-curried'

export const unshift = curried(Array.prototype.unshift, 0)
	.takesRest()
	.takesThis()
	.generate<
		<T>(elements: Array<T>) =>
			(array: Array<T>) =>
				number
	>()
