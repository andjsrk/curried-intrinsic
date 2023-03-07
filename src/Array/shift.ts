import { curried } from 'create-curried'

export const shift = curried(Array.prototype.shift)
	.takesThis()
	.generate<
		<T>(array: Array<T>) => T | undefined
	>()
