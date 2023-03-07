import { curried } from 'create-curried'

export const pop = curried(Array.prototype.pop)
	.takesThis()
	.generate<
		<T>(array: Array<T>) => T | undefined
	>()
