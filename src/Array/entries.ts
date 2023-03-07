import { curried } from 'create-curried'

export const entries = curried(Array.prototype.entries)
	.takesThis()
	.generate<
		<T>(array: ReadonlyArray<T>) => IterableIterator<[number, T]>
	>()
