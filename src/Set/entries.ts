import { curried } from 'create-curried'

export const entries = curried(Set.prototype.entries)
	.takesThis()
	.generate<
		<T>(set: Set<T>) =>
			IterableIterator<[T, T]>
	>()
