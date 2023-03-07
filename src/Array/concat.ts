import { curried } from 'create-curried'

export const concat = curried(Array.prototype.concat, 0)
	.takesRest()
	.takesThis()
	.generate<
		<T>(values: ReadonlyArray<T | ConcatArray<T>>) =>
			(array: ReadonlyArray<T>) =>
				Array<T>
	>()
