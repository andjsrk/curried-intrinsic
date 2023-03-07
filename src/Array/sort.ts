import { curried } from 'create-curried'

export const sort = curried(Array.prototype.sort)
	.takes(0)
	.takesThis()
	.generate<
		<T>(compareFn: ((a: T, b: T) => number) | undefined) =>
			(array: Array<T>) =>
				Array<T>
	>()
