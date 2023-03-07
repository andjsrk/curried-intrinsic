import { curried } from 'create-curried'

export const reverse = curried(Array.prototype.reverse)
	.takesThis()
	.generate<
		<T>(array: Array<T>) => Array<T>
	>()
