import { curried } from 'create-curried'

export const keys = curried(Array.prototype.keys)
	.takesThis()
	.generate<
		(array: ReadonlyArray<unknown>) => IterableIterator<number>
	>()
