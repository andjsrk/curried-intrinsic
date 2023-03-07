import { curried } from 'create-curried'

export const values = curried(Set.prototype.values)
	.takesThis()
	.generate<
		<T>(set: Set<T>) =>
			IterableIterator<T>
	>()
