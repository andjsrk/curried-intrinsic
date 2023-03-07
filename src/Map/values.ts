import { curried } from 'create-curried'

export const values = curried(Map.prototype.values)
	.takesThis()
	.generate<
		<V>(map: Map<unknown, V>) =>
			IterableIterator<V>
	>()
