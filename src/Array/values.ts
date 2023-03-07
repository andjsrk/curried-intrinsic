import { curried } from 'create-curried'

export const values = curried(Array.prototype.values)
	.takesThis()
	.generate<
		<T>(array: ReadonlyArray<T>) => IterableIterator<T>
	>()
