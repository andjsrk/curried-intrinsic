import { curried } from 'create-curried'

export const entries = curried(Map.prototype.entries)
	.takesThis()
	.generate<
		<K, V>(map: Map<K, V>) =>
			IterableIterator<[K, V]>
	>()
