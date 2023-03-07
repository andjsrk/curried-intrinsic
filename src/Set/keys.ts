import { curried } from 'create-curried'

export const keys = curried(Set.prototype.keys)
	.takesThis()
	.generate<
		<T>(set: Set<T>) =>
			IterableIterator<T>
	>()
