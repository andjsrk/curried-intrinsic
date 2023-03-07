import { curried } from 'create-curried'

export const push = curried(Array.prototype.push, 0)
	.takesRest()
	.takesThis()
	.generate<
		<T>(elements: Array<T>) =>
			(array: Array<T>) =>
				number
	>()
